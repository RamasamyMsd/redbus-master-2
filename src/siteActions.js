const SET_TRAVEL = "SET_TRAVEL";

export const getTravel = (datafrom,datato,dataDate) => (dispatch) => {
  console.log("hi from dispatch")
  dispatch({ type: SET_TRAVEL , datastart: datafrom, dataend:datato,travelDate:dataDate });
};


