const ColorBox = ({colorVal, hexValue, isDarkText}) => {
    return(
        <section className="colorContainer"
        style={{
            backgroundColor:colorVal,
            color: isDarkText ? "#000": "#fff" 

        }}
        >
            <p>
                {colorVal ? colorVal :"Empty Value"}
            </p>
            <p>
                {hexValue ? hexValue: null}
            </p>
            
        </section>
    )
}
ColorBox.defaultProps = {
    colorVal :  "Default Color"
}

export default ColorBox;