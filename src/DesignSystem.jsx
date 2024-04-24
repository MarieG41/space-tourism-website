import React from "react";
import './index.css'

export default function DesignSystem() {
    return (
        <div class="container flow">
            <h1 class="uppercase">Design system</h1>
            <section class="flow" id="colors" style="margin: 4rem 0">
                <h2 class="numbered-title"><span>01</span> colors</h2>
                <div class="flex">
                    <div class="flow" style="flex-grow: 1;">
                        <div class="bg-dark text-white ff-serif fs-500" style="padding: 3rem 1rem 1rem; border: 1px solid white">#0B0D17</div>
                        <p><span class="text-accent">RGB</span> 11, 13, 23</p>
                        <p><span class="text-accent">HSL</span> 230°, 35%, 7%</p>
                    </div>
                    <div class="flow" style="flex-grow: 1;">
                        <div class="bg-accent text-dark ff-serif fs-500" style="padding: 3rem 1rem 1rem; border: 1px solid white">#D0D6F9</div>
                        <p><span class="text-accent">RGB</span> 208, 214, 249</p>
                        <p><span class="text-accent">HSL</span> 231°, 77%, 90%</p>
                    </div>
                    <div class="flow" style="flex-grow: 1;">
                        <div class="bg-white text-dark ff-serif fs-500" style="padding: 3rem 1rem 1rem; border: 1px solid white;">#FFFFFF</div>
                        <p><span class="text-accent">RGB</span> 255, 255, 255</p>
                        <p><span class="text-accent">HSL</span> 0°, 0%, 100%</p>
                    </div>
                </div>
            </section>
            
            <section class="flow" id="typography"  style="margin: 4rem 0">
                <h2 class="numbered-title"><span>02 </span>Typography</h2>
                <div class="flex">
                    <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
                        <div> 
                            <p class="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                            <p class="fs-900 ff-serif uppercase">Earth</p> 
                        </div>
                        <div> 
                            <p class="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                            <p class="fs-800 ff-serif uppercase">Venus</p>
                        </div>
                        <div> 
                            <p class="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                            <p class="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                        </div>
                        <div> 
                            <p class="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                            <p class="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
                        </div> 
                        <div> 
                            <p class="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <p class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to space</p>
                        </div>
                    
                    </div>
                    
                    <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
                        <div> 
                            <p class="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                            <p class="fs-500 ff-serif uppercase">384,400 km</p>
                        </div>
                        <div> 
                            <p class="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <p class="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                        </div>
                        <div> 
                            <p class="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <p class="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
                        </div>
                        <div> 
                            <p class="text-accent">Body Text</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div> 
                    </div>
                </div>
            </section>
            
            <section class="flow" id="interactive-elements">
                <h2 class="numbered-title"><span>03</span> Interactive elements</h2>
                <div>
                    <nav>
                        <ul class="primary-navigation underline-indicators flex">
                            <li class="active"><a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
                            <li><a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
                            <li><a class="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="flex">
                    <div style="margin-top: 5rem">
                        <a href="#" class="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
                    </div>
                    <div class="flow" style="margin-bottom: 50vh; --flow-space: 4rem">
                        <div class="tab-list underline-indicators flex">
                            <button aria-selected="true" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
                            <button aria-selected="false" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
                            <button aria-selected="false" class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
                        </div>
                        <div class="dot-indicators flex">
                            <button aria-selected="true"><span class="sr-only">Slide title</span></button>
                            <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                            <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}