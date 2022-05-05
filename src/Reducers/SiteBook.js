const initialState =
{
    TravelInformation: {
        from: "",
        to: "",
        date:""
        
    }
};

const SiteBook = (state = initialState, action) => {
    const information = {
        from: action.datastart,
        to: action.dataend,
        date:action.travelDate
    }
   console.log(information)
    switch (action.type) {
        case 'SET_TRAVEL':
            // console.log(this.state);
            state.TravelInformation.from = action.datastart;
            state.TravelInformation.to = action.dataend;
            state.TravelInformation.date=action.travelDate;
            return state
        default:
            return state
    }
}
export default SiteBook;