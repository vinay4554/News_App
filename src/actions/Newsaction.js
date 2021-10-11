import axios from "axios";

export const Newsaction=() => async(dispatch) => {
  const headlinesdata=await axios.get("https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=8918e79048a3797e477bec6cdde1b951");
   dispatch({
       type:"FETCH_NEWS",
       information:{
           topheadlines:headlinesdata.data["articles"]
       }
   })
}
export const Categoryaction=(category) => async(dispatch) => {
    const categoryheadlinesdata=await axios.get(`https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&country=in&token=8918e79048a3797e477bec6cdde1b951`);
    dispatch({
        type:"FETCH_NEWS",
        information:{
            topheadlines:categoryheadlinesdata.data["articles"]
        }
    })

}
export const Searchaction=(searchvalue) => async (dispatch) => {
    const searchheadlinesdata=await axios.get(`https://gnews.io/api/v4/search?lang=en&country=in&q=${searchvalue}&token=8918e79048a3797e477bec6cdde1b951`);
    dispatch({
        type:"FETCH_NEWS",
        information:{
            topheadlines:searchheadlinesdata.data["articles"]
        }
    })

}
export const Searcheverynewsaction=(value) => async (dispatch) => {
    const everyheadlinesdata=await axios.get(`https://gnews.io/api/v4/search?lang=en&country=in&q=${value}&token=8918e79048a3797e477bec6cdde1b951`);
    dispatch({
        type:"DAILY_NEWS",
        information:{
            dailynews:everyheadlinesdata.data["articles"]
        }
    })

}
export const Everynewsaction=(value="example") => async (dispatch) => {
    const everyheadlinesdata=await axios.get(`https://gnews.io/api/v4/search?lang=en&country=in&q=${value}&token=8918e79048a3797e477bec6cdde1b951`);
    dispatch({
        type:"DAILY_NEWS",
        information:{
            dailynews:everyheadlinesdata.data["articles"]
        }
    })

}
// export const Domainnewsaction=(value) => async (dispatch) => {
//     const everyheadlinesdata=await axios.get(`https://newsapi.org/v2/everything?domains=${value}&language=en&apiKey=fd1852d9ccdd43a6a9f819d0b684d406`);
//     dispatch({
//         type:"FETCH_NEWS",
//         information:{
//             topheadlines:everyheadlinesdata.data["articles"]
//         }
//     })

// }