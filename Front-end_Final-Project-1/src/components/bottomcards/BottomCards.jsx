import { Box, Container, IconButton, Typography } from '@mui/material';

 const BottomCards = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginBottom: '50px',
                }}
            >
                {/* Big Card */}
                <Box
                    sx={{
                        position: 'relative',
                        minWidth: '100%',
                        height: { xs: '250px', sm: '300px', md: '400px' }, // Responsive height
                        overflow: 'hidden',
                        borderRadius: '25px',
                    }}
                >
                    <Box
                        component="img"
                        src="/images/bigcard.jpg"
                        sx={{
                            height: '100%',
                            minWidth: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            width: { xs: '100%', md: '600px' },
                            position: 'absolute',
                            zIndex: 5,
                            left: { xs: '10px', md: '40px' },
                            top: { xs: '80px', sm: '100px', md: '150px' },
                        }}
                    >
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '18px', sm: '24px', md: '50px' },
                                fontWeight: '250',
                                color: '#97451f',
                            }}
                        >
                            LIFESTYLE
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '24px', sm: '30px', md: '50px' },
                                fontWeight: '700',
                                color: '#97451f',
                            }}
                        >
                            Makeup Accessories from Top Brands
                        </Typography>
                    </Box>
                </Box>

                {/* Small Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Small Card 1 */}
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '25px',
                            width: { xs: '100%', md: '49%' }, 
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/smallcard1edit.jpg"
                            sx={{
                                width: '100%',
                                height: '228px',
                                objectFit: 'cover',
                                objectPosition: '40% 60%',
                            }}
                        ></Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                zIndex: 5,
                                right: { xs: '10px', md: '40px' },
                                top: { xs: '10px', md: '20px' },
                                width: { xs: 'auto', md: '160px' },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    textAlign: 'end',
                                    fontWeight: '700',
                                    color: '#a53f64',
                                    fontSize: { xs: '18px', md: '24px' },
                                }}
                            >
                                Skincare Essentials
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                color: '#a53f64',
                                position: 'absolute',
                                zIndex: 10,
                                bottom: { xs: '10px', md: '20px' },
                                right: { xs: '10px', md: '40px' },
                                width: { xs: '40px', md: '50px' },
                                height: { xs: '40px', md: '50px' },
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </IconButton>
                    </Box>

                    {/* Small Card 2 */}
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '25px',
                            width: { xs: '100%', md: '49%' },
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/smallcard2.jpg"
                            sx={{
                                width: '100%',
                                height: '228px',
                                objectFit: 'cover',
                            }}
                        ></Box>
                        <Box
                            sx={{
                                width: 'auto',
                                right: { xs: '10px', md: '40px' },
                                top: { xs: '10px', md: '20px' },
                                position: 'absolute',
                                zIndex: 5,
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    width: '140px',
                                    textAlign: 'end',
                                    fontWeight: '700',
                                    color: '#1b4b66',
                                    fontSize: { xs: '18px', md: '24px' },
                                }}
                            >
                                Facepacks & Peels
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                position: 'absolute',
                                zIndex: 10,
                                bottom: { xs: '10px', md: '20px' },
                                right: { xs: '10px', md: '40px' },
                                width: { xs: '40px', md: '50px' },
                                height: { xs: '40px', md: '50px' },
                                backgroundColor: '#f0f4f8',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease',
                                color: `#1b4b66`,
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
export default BottomCards