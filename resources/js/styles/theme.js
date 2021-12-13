import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        background:{
            main:"#E2E2E2",
            dark:"#6A6A6A"
        },
        header:{
            main: "linear-gradient(to right, rgba(181,101,216,1) 0%, rgba(205,96,159,1) 100%)",
        },
        underline:{
            main:"#B4B4B4",
        }
    }
})

export default theme