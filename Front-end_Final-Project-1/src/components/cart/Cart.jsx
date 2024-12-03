import { Box, Button, Container, Link, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import CartCard from "../cartcard/CartCard";

const Cart = () => {
    return (
        <Container sx={{flexGrow:1, marginBottom:"10px"}}>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        textAlign: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link
                        href="/"
                        underline="none"
                        sx={{
                            color: "#1b4b66",
                            fontSize: "1rem",
                        }}
                    >
                        Home
                    </Link>
                    <Typography
                        sx={{
                            color: "black",
                            fontSize: "1rem",
                        }}
                    >
                        {'>'}
                    </Typography>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            color: "#626262",
                            fontSize: "1rem",
                        }}
                    >
                        My Cart
                    </Link>
                </Box>
                <Typography
                    variant="h1"
                    sx={{
                        color: "#1b4b66",
                        marginTop: "20px",
                        marginBottom: "30px",
                        fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                    }}
                >
                    My Cart
                </Typography>
                {/* Inner container */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        gap: { xs: "20px", md: "0" },
                        marginTop: "120px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: { xs: "100%", md: "58.8525%" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#626262",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: { xs: "10px", sm: "0" },
                            }}
                        >
                            <Box>
                                <Typography component={"p"}>Product Name</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginRight: "10px",
                                    width: { xs: "100%", sm: "35%" },
                                    gap: "10px",
                                }}
                            >
                                <Typography component={"p"}>Price</Typography>
                                <Typography component={"p"}>Qty</Typography>
                                <Typography component={"p"}>Subtotal</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        {/* Cart Cards */}
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: { xs: "100%", md: "33.226%" },
                        }}
                    >
                        <Typography
                            component={"h2"}
                            sx={{
                                fontSize: "1.5rem",
                                fontWeight: "600",
                            }}
                        >
                            Order Summary
                        </Typography>
                        <Divider
                            sx={{
                                marginBottom: "20px",
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                gap: "5px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography component={"p"} color="#626262">
                                    Subtotal
                                </Typography>
                                <Typography component={"p"}>$100.00</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography component={"p"} color="#626262">
                                    Discount
                                </Typography>
                                <Typography component={"p"}>-$13.40</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography component={"p"} color="#626262">
                                    Delivery Fee
                                </Typography>
                                <Typography component={"p"}>-$12.00</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography component={"p"} fontWeight={600}>
                                    Grand Total
                                </Typography>
                                <Typography component={"p"} fontWeight={600}>
                                    $74.60
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    justifyContent: "space-between",
                                    marginTop: "40px",
                                    gap: { xs: "10px", sm: "0" },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: "5px",
                                        textTransform: "none",
                                        width: { xs: "100%", sm: "47%" },
                                        bgcolor: "#1B4B66",
                                    }}
                                >
                                    Proceed to checkout
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        textTransform: "none",
                                        borderRadius: "5px",
                                        width: { xs: "100%", sm: "47%" },
                                        color: "#1B4B66",
                                        borderColor: "#1B4B66",
                                    }}
                                >
                                    Continue Shopping
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
export default Cart