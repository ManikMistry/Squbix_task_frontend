  import ProductReview from "./ProductReview";
  import { Grid, Rating, Box, LinearProgress } from "@mui/material";
  import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { addToCart } from "../../context/action";

  const ProductDetails = ({product}) => {
    console.log(product)
    const dispatch=useDispatch()

    const handleAddToCart=()=>{
      dispatch(addToCart(product))
    }
    const navigate=useNavigate();

    const handleOrderSummary=()=>{
      navigate('deliveryAddressForm')
    }
    return (
      <>
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden relative top-5">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 sm:object-fit object-center rounded"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  WOXEN
                </h2>
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                Women Kurta and Pant Set Art Silk
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <Rating
                      value={4.5}
                      precision={0.5}
                      readOnly
                      sx={{
                        borderColor: "white",
                        "& .MuiRating-iconFilled": {
                          color: "fab14a",
                        },
                        "& .MuiRating-iconEmpty": {
                          color:"white",
                        },
                      }}
                    />
                    <span className="ml-3">54654 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                    {/* Add more icons for actions */}
                  </span>
                </div>
                <p className="leading-relaxed pt-10 ">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                  seitan poutine tumeric. Gastropub blue bottle austin listicle
                  pour-over, neutra jean shorts keytar banjo tattooed umami
                  cardigan.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-white-800 rounded-full w-6 h-6 focus:outline-none mr-1 bg-red-600"></button>
                    <button className="border-2 border-white-800 rounded-full w-6 h-6 focus:outline-none mr-1 bg-green-600"></button>
                    <button className="border-2 border-white-800 rounded-full w-6 h-6 focus:outline-none mr-1 bg-blue-600"></button>
                    <button className="border-2 border-white-800 rounded-full w-6 h-6 focus:outline-none mr-1 bg-yellow-500"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border border-gray-700 focus:ring-2 focus:ring-purple-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-purple-500 text-white pl-3 pr-10">
                        <option className="text-black">S</option>
                        <option className="text-black">M</option>
                        <option className="text-black">L</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="line-through opacity-50">₹2,899</p>
                  <p className="text-green-600 font-semibold">75%</p>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">
                    ₹699.00
                  </span>
                  <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-bold" onClick={handleAddToCart}>
                  Add to Cart
                    <ShoppingCartCheckoutIcon sx={{ marginLeft: "10px" }} />
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-10">
          <h1 className=" font-semibold text-lg pb-4">
            Recent Reviews and Ratings
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className=" space-y-5">
                  {[1, 1, 1].map((item,index) => (
                    <ProductReview key={index} />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className=" text-xl font-semibold pb-2">Product Ratings</h1>
                <div className=" flex items-center space-x-3">
                  <Rating value={4.5} precision={0.5} readOnly />
                  <p className=" opacity-60">36789 Ratings</p>
                </div>
                <Box className=" mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 6 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 6 }}
                        variant="determinate"
                        value={35}
                        color="success"
                      />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 6 }}
                        variant="determinate"
                        value={30}
                        color="info"
                      />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 6 }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 6 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
      </>
    );
  };

  export default ProductDetails;

  