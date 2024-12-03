import { Box, Link, Typography } from "@mui/material"

const CartCard = () => {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                marginTop: "25px",
                gap: { xs: "20px", sm: "0" },
            }}
        >
            <Link
                sx={{
                    position: { sm: "absolute" },
                    right: "10px",
                    bottom: "0",
                    color: "red",
                    textDecorationColor: "red",
                }}
                href="#"
            >
                Remove
            </Link>
            <Box
                sx={{
                    display: "flex",
                    gap: "15px",
                }}
            >
                <Box
                    component={"img"}
                    sx={{
                        width: "75px",
                        height: "80px",
                        borderRadius: "10px",
                        maxWidth: "100%",
                    }}
                    src="/images/pinkbag.png"
                ></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography component={"p"}>Coach</Typography>
                    <Typography component={"p"} color="#626262">
                        Leather Coach Bag
                    </Typography>
                    <Typography component={"p"} color="#626262">
                        Qty- 1
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "100%", sm: "35%" },
                    marginRight: "15px",
                    gap: "10px",
                }}
            >
                <Typography component={"p"}>$54.69</Typography>
                <Typography component={"p"}>1</Typography>
                <Typography component={"p"}>$54.69</Typography>
            </Box>
        </Box>
    )
}
export default CartCard