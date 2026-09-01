import React, { Component } from 'react';

const media = [
    { src: '/CMSC839E/ai-images/cmsc839e_teaser_blue_no_course_title.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/cmsc839e_teaser_dark_no_course_title.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/cmsc839e_teaser_light_no_course_title.png', source: 'GPT', type: 'image' },
    { src: '/CMSC839E/ai-images/cmsc839e_teaser_warm_no_course_title.png', source: 'GPT', type: 'image' },
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
                <img
                    src={item.src}
                    alt='AI-generated course teaser'
                    className='teaser-img'
                    onClick={() => this.setState({ enlarged: true })}
                    style={{ cursor: 'zoom-in' }}
                />
                <div className='teaser-caption'>
                    ~ AI generated teaser via {item.source}
                </div>

                {this.state.enlarged && (
                    <div className='teaser-overlay' onClick={() => this.setState({ enlarged: false })}>
                        <img src={item.src} alt='AI-generated course teaser' className='teaser-enlarged' />
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
