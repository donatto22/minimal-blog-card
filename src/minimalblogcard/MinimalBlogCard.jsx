import './minimalBlogCard.css'

const MinimalBlogCard = () => {
    return (
        <div id="fakeBody">
            <div id="cardContainer">
                <div id="container-top">
                    <div id="container-img">
                        <img src="./cactus.webp" alt="Cactus image" />
                    </div>

                    <div id="container-tag">
                        Design
                    </div>

                    <div id="container-text">
                        <div className="title">
                            Embracing Minimalism
                        </div>

                        <div className="description">
                            From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.
                        </div>
                    </div>
                </div>

                <div id="container-footer">
                    <text>Annie Sprat</text>
                </div>
            </div>
        </div>
    )
}

export default MinimalBlogCard
