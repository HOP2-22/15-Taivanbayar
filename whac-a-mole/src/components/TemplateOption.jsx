
export const TemplateChooser = ({setTemplater, template}) => {
    return(
        <select
        style={{
          width: "100%",
          height: "5vh",
          backgroundColor: "#B40000",
          color: "#FFFFFF",
          fontWeight:"bolder",
          border:"none",
          fontSize:"32px"
        }}
      >
        <option value={"3x3"} onClick={() => setTemplater(3, 3)}>
          3x3
        </option>
        <option
          value={"3x5"}
          selected
          onClick={() => setTemplater({a: 3, b:5})}
        >
          3x5
        </option>
        <option value={"5x5"} onClick={() => setTemplater({a: 5, b:5})}>
          5x5
        </option>
      </select>
    )
}