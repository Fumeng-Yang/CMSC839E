import React, { Component } from 'react';

const media = [
    { src: '/CMSC839E/ai-images/midjourney-1.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/midjourney-2.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/midjourney-3.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/midjourney-4.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/midjourney-5.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/midjourney-6.png', source: 'Midjourney', type: 'image' },
    { src: '/CMSC839E/ai-images/gemini.png', source: 'Gemini', type: 'image' },
    { src: '/CMSC839E/ai-images/gpt-image-2.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/gpt-image-2-1.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/gpt-image-2-2.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/gpt-image-2-3.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/gpt-image-2-4.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/gemini-video.mp4', source: 'Gemini', type: 'video' },
];

class TeaserGallery extends Component {
    state = {
        current: Math.floor(Math.random() * media.length),
        enlarged: false
    };

    render() {
        const { current } = this.state;
        const item = media[current];

        return (
            <div className='teaser-gallery'>
                {item.type === 'image' ? (
                    <img
                        src={item.src}
                        alt='AI-generated course teaser'
                        className='teaser-img'
                        onClick={() => this.setState({ enlarged: true })}
                        style={{ cursor: 'zoom-in' }}
                    />
                ) : (
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='teaser-img'
                        onClick={() => this.setState({ enlarged: true })}
                        style={{ cursor: 'zoom-in' }}
                    />
                )}
                <div className='teaser-caption'>
                    ~ AI generated teaser via {item.source}
                </div>

                {this.state.enlarged && (
                    <div className='teaser-overlay' onClick={() => this.setState({ enlarged: false })}>
                        {item.type === 'image' ? (
                            <img src={item.src} alt='AI-generated course teaser' className='teaser-enlarged' />
                        ) : (
                            <video src={item.src} autoPlay muted loop playsInline className='teaser-enlarged' />
                        )}
                        <div className='teaser-overlay-caption'>
                            AI generated teaser via {item.source} &middot; click anywhere to close
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default TeaserGallery;
