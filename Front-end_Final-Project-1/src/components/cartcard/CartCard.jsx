import { Box, Link, Typography } from "@mui/material";

const CartCard = ({ item, onRemove }) => {
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
          cursor: "pointer",
        }}
        onClick={() => onRemove(item.id)} 
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
          src={item.product.imageUrl}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component={"p"}>{item.product.name}</Typography>
          <Typography component={"p"} color="#626262">
            {item.product.categoryName}
          </Typography>
          <Typography component={"p"} color="#626262">
            Qty-{item.quantity}
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
        <Typography component={"p"}>${item.priceAfterDiscount}</Typography>
        <Typography component={"p"}>{item.quantity}</Typography>
        <Typography component={"p"}>
          ${item.totalPriceAfterDiscount.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartCard;
