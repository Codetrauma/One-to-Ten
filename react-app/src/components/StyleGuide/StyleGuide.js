const StyleGuide = () => {
    return (
        <div>
            <div className="style-group">
                <h1>H1 Header</h1>
                <p className="description h1">4em // 600 weight</p>
            </div>
            <div className="style-group">
                <h2>H2 Header</h2>
                <p className="description h2">2.2em // 600 weight</p>
            </div>
            <div className="style-group">
                <h3>H3 Subheader</h3>
                <p className="description h3">1.8em // 600 weight</p>
            </div>
            <div className="style-group">
                <h4>H4 Subheader</h4>
                <p className="description h4">1.4em // 600 weight</p>
            </div>
            <div className="style-group">
                <p className="p-1">P with class p-1</p>
                <p className="description p">16px (1em) // normal weight // .2px letter spacing</p>
                <p className="p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="style-group">
                <p className="description p">.8em // normal weight</p>
                <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="style-group">
                <button className="button-1">Button button-1</button>
                <p className="description button">button class button-1 description</p>
            </div>
            <div className="style-group">
                <button className="button-2">Button button-2</button>
                <p className="description button">button class button-2 description</p>
            </div>
            <div className="style-group">
                <button className="a-1">A a-1</button>
                <p className="description a">a class a-1 description</p>
            </div>
            <div className="style-group">
                <button className="a-2">A a-2</button>
                <p className="description a">a class a-1 description</p>
            </div>
            <div className="style-group">
                <label className="label-1">Label 1</label>
                <input id='style-guide' type='text' placeholder='placeholder' className="text-input"></input>
            </div>
        </div>
    )
}

export default StyleGuide;
