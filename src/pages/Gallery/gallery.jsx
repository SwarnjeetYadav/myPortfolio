import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react';
import { galleryImages } from './galleryConfig';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get unique categories from the gallery images
    const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredImages = activeCategory === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % filteredImages.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(filteredImages[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(filteredImages[prevIndex]);
    };

    const handleFullscreen = () => {
        if (selectedImage) {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                setIsFullscreen(true);
            } else {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const downloadImage = (image) => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = image.title || 'gallery-image';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'f':
                    handleFullscreen();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, currentImageIndex, filteredImages]);

    // Fullscreen change listener
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Gallery</h1>
                            <p className="text-gray-600 mt-1">A collection of my favorite photographs and memories</p>
                        </div>
                        <a 
                            href="/" 
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Back to Portfolio
                        </a>
                    </div>
                </div>
            </header>

            {/* Category Filter */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => openLightbox(image, index)}
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=${image.title}`;
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                                    <p className="text-sm capitalize">{image.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No images found in this category.</p>
                        <p className="text-gray-400 text-sm mt-2">Add images to the gallery configuration to see them here.</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Image Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain"
                            style={{
                                maxWidth: '95vw',
                                maxHeight: '95vh',
                                width: 'auto',
                                height: 'auto'
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=${selectedImage.title}`;
                            }}
                        />
                        
                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                            <p className="text-sm capitalize">{selectedImage.category}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            <button
                                onClick={() => downloadImage(selectedImage)}
                                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors backdrop-blur-sm"
                                title="Download"
                            >
                                <Download size={20} />
                            </button>
                            <button
                                onClick={handleFullscreen}
                                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors backdrop-blur-sm"
                                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                            >
                                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                            </button>
                        </div>

                        {/* Image Counter */}
                        <div className="absolute top-4 right-16 text-white bg-black bg-opacity-50 px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
                            {currentImageIndex + 1} / {filteredImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;