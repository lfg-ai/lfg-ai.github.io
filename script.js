// LFG Project Website - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initScrollSpy();
    initImageCycling();
    initFrameSelectors();
    initSceneSelectors();
});

// ==================== Scroll Spy ====================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ==================== Image Cycling Data ====================
const cyclingData = {
    depth: {
        scenes: {
            1: {
                frames: {
                    0: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_00_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_00_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_00_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    1: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_01_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_01_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_01_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    2: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_02_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_02_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_02_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_03_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_03_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_03_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    4: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_04_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_04_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_04_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    5: {
                        images: [
                            { src: 'static/images/results/depth/scene1/frame_05_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene1/frame_05_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene1/frame_05_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    }
                }
            },
            2: {
                frames: {
                    0: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_00_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_00_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_00_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    1: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_01_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_01_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_01_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    2: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_02_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_02_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_02_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_03_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_03_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_03_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    4: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_04_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_04_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_04_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    },
                    5: {
                        images: [
                            { src: 'static/images/results/depth/scene2/frame_05_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/depth/scene2/frame_05_regular_pi3_depth.png', label: '\u03C0\u00B3 Depth' },
                            { src: 'static/images/results/depth/scene2/frame_05_pi3_depth.png', label: 'LFG Depth' }
                        ]
                    }
                }
            }
        },
        currentScene: 1,
        currentFrame: 0,
        currentIndex: 0
    },
    semantics: {
        scenes: {
            1: {
                frames: {
                    0: {
                        images: [
                            { src: 'static/images/results/semantics/scene1/frame_00_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene1/frame_00_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene1/frame_00_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    },
                    1: {
                        images: [
                            { src: 'static/images/results/semantics/scene1/frame_01_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene1/frame_01_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene1/frame_01_pi3_seg_colored (1).png', label: 'LFG Semantics' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/semantics/scene1/frame_03_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene1/frame_03_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene1/frame_03_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    },
                    5: {
                        images: [
                            { src: 'static/images/results/semantics/scene1/frame_05_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene1/frame_05_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene1/frame_05_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    }
                }
            },
            2: {
                frames: {
                    0: {
                        images: [
                            { src: 'static/images/results/semantics/scene2/frame_00_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene2/frame_00_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene2/frame_00_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    },
                    1: {
                        images: [
                            { src: 'static/images/results/semantics/scene2/frame_01_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene2/frame_01_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene2/frame_01_pi3_seg_colored (1).png', label: 'LFG Semantics' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/semantics/scene2/frame_03_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene2/frame_05_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene2/frame_03_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    },
                    5: {
                        images: [
                            { src: 'static/images/results/semantics/scene2/frame_05_rgb.png', label: 'RGB Input' },
                            { src: 'static/images/results/semantics/scene2/frame_05_seg_colored.png', label: 'SegFormer' },
                            { src: 'static/images/results/semantics/scene2/frame_05_pi3_seg_colored.png', label: 'LFG Semantics' }
                        ]
                    }
                }
            }
        },
        currentScene: 1,
        currentFrame: 0,
        currentIndex: 0
    },
    motion: {
        scenes: {
            1: {
                frames: {
                    1: {
                        images: [
                            { src: 'static/images/results/motion/scene1/frame1.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene1/pred_motion1.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene1/motion1.png', label: 'Pseudo GT' }
                        ]
                    },
                    2: {
                        images: [
                            { src: 'static/images/results/motion/scene1/frame2.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene1/pred_motion2.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene1/motion2.png', label: 'Pseudo GT' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/motion/scene1/frame3.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene1/pred_motion3.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene1/motion3.png', label: 'Pseudo GT' }
                        ]
                    }
                }
            },
            2: {
                frames: {
                    1: {
                        images: [
                            { src: 'static/images/results/motion/scene2/frame1.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene2/pred_motion1.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene2/motion1.png', label: 'Pseudo GT' }
                        ]
                    },
                    2: {
                        images: [
                            { src: 'static/images/results/motion/scene2/frame2.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene2/pred_motion2.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene2/motion2.png', label: 'Pseudo GT' }
                        ]
                    },
                    3: {
                        images: [
                            { src: 'static/images/results/motion/scene2/frame3.png', label: 'RGB Input' },
                            { src: 'static/images/results/motion/scene2/pred_motion3.png', label: 'LFG Motion' },
                            { src: 'static/images/results/motion/scene2/motion3.png', label: 'Pseudo GT' }
                        ]
                    }
                }
            }
        },
        currentScene: 1,
        currentFrame: 1,
        currentIndex: 0
    },
    pointcloud: {
        scenes: {
            1: {
                frames: {
                    0: {
                        images: [
                            { src: 'static/images/results/pointcloud/lfg.png', label: 'LFG' },
                            { src: 'static/images/results/pointcloud/pi3.png', label: '\u03C0\u00B3' }
                        ]
                    }
                }
            }
        },
        currentScene: 1,
        currentFrame: 0,
        currentIndex: 0
    }
};

// ==================== Image Cycling ====================
function initImageCycling() {
    const cyclingDisplays = document.querySelectorAll('.cycling-display');

    cyclingDisplays.forEach(display => {
        display.addEventListener('click', function() {
            const type = this.dataset.cycling;
            cycleImage(type, this);
        });
    });
}

function cycleImage(type, displayElement) {
    const data = cyclingData[type];
    if (!data) return;

    const sceneData = data.scenes[data.currentScene];
    if (!sceneData) return;

    const frameData = sceneData.frames[data.currentFrame];
    if (!frameData) return;

    // Move to next image
    data.currentIndex = (data.currentIndex + 1) % frameData.images.length;

    // Update display
    updateDisplay(type, displayElement);
}

function updateDisplay(type, displayElement) {
    const data = cyclingData[type];
    const sceneData = data.scenes[data.currentScene];
    if (!sceneData) return;

    const frameData = sceneData.frames[data.currentFrame];
    if (!frameData) return;

    const imageData = frameData.images[data.currentIndex];
    const img = displayElement.querySelector('.result-image');
    const label = displayElement.querySelector('.cycling-label');

    // Fade effect
    img.style.opacity = '0.5';

    setTimeout(() => {
        img.src = imageData.src;
        label.textContent = imageData.label;
        img.style.opacity = '1';
    }, 150);
}

// ==================== Frame Selectors ====================
function initFrameSelectors() {
    const containers = document.querySelectorAll('.result-container');

    containers.forEach(container => {
        const type = container.dataset.resultType;
        const buttons = container.querySelectorAll('.frame-btn');
        const display = container.querySelector('.cycling-display');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const frame = parseInt(this.dataset.frame);
                selectFrame(type, frame, container, display);

                // Update button states
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

function selectFrame(type, frame, container, displayElement) {
    const data = cyclingData[type];
    if (!data) return;

    data.currentFrame = frame;
    data.currentIndex = 0;

    updateDisplay(type, displayElement);
}

// ==================== Scene Selectors ====================
function initSceneSelectors() {
    const containers = document.querySelectorAll('.result-container');

    containers.forEach(container => {
        const type = container.dataset.resultType;
        const sceneButtons = container.querySelectorAll('.scene-btn');
        const frameButtons = container.querySelectorAll('.frame-btn');
        const display = container.querySelector('.cycling-display');

        sceneButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const scene = parseInt(this.dataset.scene);
                selectScene(type, scene, display);

                // Update button states
                sceneButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Reset frame selection
                frameButtons.forEach((b, i) => {
                    if (i === 0) b.classList.add('active');
                    else b.classList.remove('active');
                });
            });
        });
    });
}

function selectScene(type, scene, displayElement) {
    const data = cyclingData[type];
    if (!data) return;

    data.currentScene = scene;
    data.currentIndex = 0;

    // Reset to first available frame for this scene
    const sceneData = data.scenes[scene];
    if (sceneData) {
        const firstFrame = Object.keys(sceneData.frames)[0];
        data.currentFrame = parseInt(firstFrame);
    }

    updateDisplay(type, displayElement);
}

// ==================== BibTeX Copy ====================
function copyBibtex() {
    const bibtexCode = document.querySelector('.bibtex-code code').textContent;

    navigator.clipboard.writeText(bibtexCode).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#22c55e';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = bibtexCode;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = 'Copy';
        }, 2000);
    });
}

// ==================== Preload Images ====================
function preloadImages() {
    Object.values(cyclingData).forEach(typeData => {
        Object.values(typeData.scenes).forEach(sceneData => {
            Object.values(sceneData.frames).forEach(frameData => {
                frameData.images.forEach(imageData => {
                    const img = new Image();
                    img.src = imageData.src;
                });
            });
        });
    });
}

// Preload images after page load
window.addEventListener('load', preloadImages);
