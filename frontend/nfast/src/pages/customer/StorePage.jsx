import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StoreInfo from "../../components/storepage/StoreInfo";
import StoreReview from "../../components/storepage/StoreReview";
// import StoreChart from "../../components/storepage/StoreChart";
// import KakaoMap from "../../components/storepage/KakaoMap";
// import KaKaoMap from "../../components/strepage/KaKaoMap";
// import StoreNav from "../../components/storepage/StoreNav";
import { storeAction } from "../../redux/actions/storeAction";

export default function StorePage() {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const { storeSequence } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeAction.getStoreDetail(storeSequence));
  }, []);

  const storedetail = useSelector(
    (state) => state.storepageReducer.storedetail
  );

  return (
    storedetail && (
      <div>
        <Wrapper>
          <StoreInfo
            storeImage={storedetail.store.storeImage}
            storeName={storedetail.store.storeName}
            storeDetail={storedetail.store.storeDetail}
            storeLunchStart={storedetail.store.storeLunchStart}
            storeLunchEnd={storedetail.store.storeLunchEnd}
            storeDinnerStart={storedetail.store.storeDinnerStart}
            storeDinnerEnd={storedetail.store.storeDinnerEnd}
            storePhone={storedetail.store.storePhone}
            storeInformation={storedetail.store.storeInformation}
          />
          <Divider />
          <Review
            reviewTime={storedetail.review.reviewTime[0]}
            cntTime={storedetail.review.reviewTime[1]}
            reviewConvenience={storedetail.review.reviewConvenience[0]}
            cntConvenience={storedetail.review.reviewConvenience[1]}
            reviewService={storedetail.review.reviewService[0]}
            cntService={storedetail.review.reviewService[1]}
            reviewMood={storedetail.review.reviewMood[0]}
            cntMood={storedetail.review.reviewMood[1]}
          />
        </Wrapper>
      </div>
    )
  );
}
//   return (
//     <div>
//       <Wrapper>
//         <StoreInfo storeSequence={storeSequence} />
//         <Divider />
//         <Review />
//         <Divider />
//         <Graph>
//           <Chart />
//         </Graph>
//         <Divider />
//         <h4>지도</h4>
//         <MapWrapper>
//           <Map>
//             <KaKaoMap />
//           </Map>
//         </MapWrapper>
//         <Footer>
//           <StoreNav />
//         </Footer>
//       </Wrapper>
//     </div>
//   );
// }

// export default StorePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: auto;

  h4 {
    width: 100%;
    border-top: solid 1px black;
  }
`;
const Divider = styled.div`
  border-top: 1px solid #bcb6ff;
  width: 100%;
  margin-top: 20px;
`;

const Review = styled(StoreReview)`
  width: 100%;
`;
// const Graph = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const Chart = styled(StoreChart)`
//   width: 100%;
//   height: 100%;
// `;

// const MapWrapper = styled.div`
//   width: 300px;
//   height: 300px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 100px;
// `;

// const Map = styled.div`
//   width: 100%;
//   height: 100%;
//   z-index: 0; /* Set z-index to 0 */
// `;
// const Footer = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   z-index: 1; /* Set z-index to 1 */
// `;
