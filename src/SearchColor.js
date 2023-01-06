import colorNames from "colornames";
const SearchColor = ({colorVal, setColor, setHexValue, isDarkText, setIsDarkText}) => {
    return(
        <form className="search" onSubmit ={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
            <input
                autoFocus 
                value= {colorVal}
                onChange={(e) => {

                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
                placeholder="Add Color Name"
                type='text'
                ></input>
      <button
      type = "button"
      onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>

    )
}

export default SearchColor;