import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Detail,
  HeadingDetail,
  CreateDate,
  DetailGroup,
  DetailGroupSection,
  Section,
  ProductList,
  DetailList,
} from './stylesDetail'

const detail = () => {
  const details = useSelector((state) => state.orders.data)
  console.log(details)
  const detailSreet = details?.shipping_address
  const detailShipping = details?.shipping
  const detailItems = details?.items?[0].discount
  console.log(detailItems)
  return (
    <Detail>
      <DetailList>
        <HeadingDetail>
          <span>Chi tiết đơn hàng #{details.id}</span>
          <span className="split">-</span>
          <span className="status">Đang xử lý</span>
        </HeadingDetail>
        <CreateDate>Ngày đặt hàng: 15:54 09/11/2022</CreateDate>
        <DetailGroup>
          <DetailGroupSection>
            <Section>
              <div className="title">ĐỊA CHỈ NGƯỜI NHẬN</div>
              <div className="content">
                <p className="name">Tiki Trading</p>
                <p className="address">
                  <span>Địa chỉ: </span>
                  {detailSreet?.street}, {detailSreet?.ward}, {detailSreet?.city},{' '}
                  {detailSreet?.region}, {detailSreet?.country}
                </p>
                <p className="phone">
                  <span>Điện thoại: </span>
                  {detailSreet?.telephone}
                </p>
              </div>
            </Section>
          </DetailGroupSection>
          <DetailGroupSection>
            <Section>
              <div className="title">HÌNH THỨC GIAO HÀNG</div>
              <div className="content">
                <p>
                  <svg
                    width="32"
                    height="10"
                    viewBox="0 0 32 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.57583 5.34185V1.16633C5.57583 0.858984 5.6925 0.587037 5.90883 0.370711C6.12515 0.154386 6.3971 0.037714 6.70445 0.037714C7.00969 0.037714 7.28001 0.152791 7.49561 0.366275C7.72019 0.579688 7.8463 0.852606 7.8463 1.16633V8.85814C7.8463 9.17505 7.72438 9.45399 7.49561 9.67144C7.2761 9.88874 6.99981 10 6.69121 10C6.35488 10 6.07267 9.84925 5.85779 9.60266C5.82903 9.57345 5.78506 9.52639 5.74916 9.46917L2.27272 4.64561V8.85814C2.27272 9.16458 2.15704 9.43638 1.94845 9.65801L1.94415 9.66257L1.93972 9.667C1.7195 9.88723 1.44155 10 1.13086 10C0.823514 10 0.551567 9.88333 0.335241 9.667C0.115016 9.44678 0.00224337 9.16884 0.00224337 8.85814V1.16608C-0.0192115 0.794465 0.112538 0.458564 0.427031 0.233926L0.434382 0.228675C0.697506 0.0492731 0.997144 -0.0388025 1.3149 0.0162903C1.61723 0.0598146 1.86945 0.21251 2.04871 0.460661L5.57583 5.34185Z"
                      fill="#FF424E"
                    ></path>
                    <path
                      d="M16.6962 8.23323C16.3128 8.65921 15.8528 8.99574 15.316 9.24281C14.7793 9.48136 14.2212 9.60064 13.6419 9.60064C12.4065 9.60064 11.3629 9.14909 10.5109 8.24601C9.66746 7.34292 9.24573 6.26092 9.24573 5C9.24573 3.73908 9.66746 2.65708 10.5109 1.75399C11.3629 0.850905 12.398 0.399361 13.6163 0.399361C14.8347 0.399361 15.8655 0.859425 16.709 1.77955C17.561 2.69116 17.9869 3.7689 17.9869 5.01278C17.9869 6.25666 17.5567 7.33014 16.6962 8.23323ZM10.7026 5C10.7026 5.86049 10.988 6.6017 11.5588 7.22364C12.1297 7.83706 12.8155 8.14377 13.6163 8.14377C14.4257 8.14377 15.1115 7.8328 15.6738 7.21086C16.2447 6.5804 16.5301 5.84345 16.5301 5C16.5301 4.15655 16.2489 3.42386 15.6866 2.80192C15.1243 2.17146 14.4342 1.85623 13.6163 1.85623C12.807 1.85623 12.1169 2.1672 11.5461 2.78914C10.9838 3.40256 10.7026 4.13951 10.7026 5Z"
                      fill="#FF424E"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4782 9.60775C14.8911 9.86867 14.2779 10 13.6418 10C12.2959 10 11.1474 9.50267 10.2204 8.52006L10.219 8.5186C9.30491 7.53989 8.84631 6.35983 8.84631 5C8.84631 3.64017 9.30491 2.46011 10.219 1.4814L10.2204 1.47994C11.1462 0.498603 12.2857 0 13.6163 0C14.949 0 16.0852 0.508839 17.002 1.5082C17.922 2.49325 18.3863 3.66791 18.3863 5.01278C18.3863 6.35768 17.9176 7.52833 16.9892 8.50463C16.5691 8.97023 16.0657 9.33734 15.483 9.60558L15.4782 9.60775ZM16.6962 8.23323C17.5567 7.33014 17.9869 6.25666 17.9869 5.01278C17.9869 3.7689 17.561 2.69116 16.709 1.77955C15.8655 0.859425 14.8347 0.399361 13.6163 0.399361C12.398 0.399361 11.3629 0.850905 10.5109 1.75399C9.66746 2.65708 9.24573 3.73908 9.24573 5C9.24573 6.26092 9.66746 7.34292 10.5109 8.24601C11.3629 9.14909 12.4065 9.60064 13.6419 9.60064C14.2212 9.60064 14.7793 9.48136 15.316 9.24281C15.8528 8.99574 16.3128 8.65921 16.6962 8.23323ZM15.3777 6.94282C15.8827 6.38512 16.1307 5.74347 16.1307 5C16.1307 4.25487 15.8858 3.61779 15.3903 3.06975L15.3885 3.06774C14.8992 2.51906 14.3161 2.25559 13.6163 2.25559C12.9242 2.25559 12.3392 2.51558 11.8404 3.059C11.3481 3.59604 11.1019 4.23567 11.1019 5C11.1019 5.76215 11.3509 6.40609 11.8521 6.95258C12.3511 7.48837 12.9324 7.74441 13.6163 7.74441C14.3082 7.74441 14.8881 7.48443 15.3777 6.94282ZM11.5588 7.22364C10.988 6.6017 10.7026 5.86049 10.7026 5C10.7026 4.13951 10.9838 3.40256 11.5461 2.78914C12.1169 2.1672 12.807 1.85623 13.6163 1.85623C14.4342 1.85623 15.1243 2.17146 15.6866 2.80192C16.2489 3.42386 16.5301 4.15655 16.5301 5C16.5301 5.84345 16.2447 6.5804 15.6738 7.21086C15.1115 7.8328 14.4257 8.14377 13.6163 8.14377C12.8155 8.14377 12.1297 7.83706 11.5588 7.22364Z"
                      fill="#FF424E"
                    ></path>
                    <path
                      d="M23.1843 9.45364L23.0783 9.53311H23.0651C23.0386 9.53311 22.9989 9.54636 22.9459 9.57285H22.9062C22.8797 9.58168 22.8355 9.58609 22.7737 9.58609C22.7207 9.58609 22.681 9.58168 22.6545 9.57285H22.6148C22.5618 9.55519 22.5309 9.54636 22.5221 9.54636C22.5132 9.53753 22.4956 9.5287 22.4691 9.51987C22.4514 9.51104 22.4205 9.48896 22.3764 9.45364H22.3631C22.3278 9.42715 22.2925 9.39625 22.2572 9.36093C22.2218 9.31678 22.1953 9.28587 22.1777 9.26821V9.25497C22.1688 9.24614 22.1556 9.22848 22.1379 9.20199C22.1291 9.16667 22.1203 9.14459 22.1115 9.13576L18.8532 1.41391C18.7825 1.22848 18.7825 1.04305 18.8532 0.857616C18.9326 0.672185 19.0651 0.54415 19.2505 0.47351C19.4271 0.39404 19.6081 0.39404 19.7936 0.47351C19.9878 0.54415 20.1203 0.672185 20.1909 0.857616L22.787 6.99007L24.4956 2.92384C24.6192 2.62362 24.8443 2.47351 25.1711 2.47351C25.5066 2.47351 25.7406 2.62362 25.873 2.92384L27.5817 6.99007L30.1644 0.857616C30.2439 0.672185 30.3764 0.54415 30.5618 0.47351C30.7472 0.39404 30.9326 0.39404 31.1181 0.47351C31.3035 0.54415 31.4315 0.6766 31.5022 0.870861C31.5817 1.05629 31.5817 1.23731 31.5022 1.41391L28.2571 9.13576C28.2395 9.2064 28.1909 9.27704 28.1115 9.34768C28.1115 9.35651 28.107 9.36976 28.0982 9.38742C28.0629 9.40508 28.032 9.42715 28.0055 9.45364H27.9922L27.873 9.53311H27.8598C27.851 9.53311 27.8421 9.53753 27.8333 9.54636C27.8245 9.54636 27.7936 9.55519 27.7406 9.57285H27.7141C27.6876 9.58168 27.6435 9.58609 27.5817 9.58609C27.5287 9.58609 27.4889 9.58168 27.4624 9.57285H27.4227C27.3697 9.55519 27.3388 9.54636 27.33 9.54636C27.3212 9.53753 27.3035 9.53311 27.277 9.53311C27.2594 9.52428 27.2285 9.49779 27.1843 9.45364H27.1711C27.0916 9.40066 27.0342 9.33885 26.9989 9.26821C26.9636 9.25055 26.9371 9.2064 26.9194 9.13576L25.1843 5.0298L23.4492 9.13576C23.4404 9.16225 23.4227 9.20199 23.3962 9.25497L23.3035 9.34768C23.3035 9.35651 23.2991 9.36976 23.2903 9.38742C23.2726 9.39625 23.2461 9.41832 23.2108 9.45364H23.1843Z"
                      fill="#FF424E"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.1711 9.45364C27.0916 9.40066 27.0342 9.33885 26.9989 9.26821C26.9636 9.25055 26.9371 9.2064 26.9194 9.13576L25.1843 5.0298L23.4492 9.13576C23.4404 9.16225 23.4227 9.20199 23.3962 9.25497L23.3035 9.34768C23.3035 9.35651 23.2991 9.36976 23.2903 9.38742C23.2726 9.39625 23.2461 9.41832 23.2108 9.45364H23.1843L23.0783 9.53311H23.0651C23.0386 9.53311 22.9989 9.54636 22.9459 9.57285H22.9062C22.8797 9.58168 22.8355 9.58609 22.7737 9.58609C22.7207 9.58609 22.681 9.58168 22.6545 9.57285H22.6148C22.5618 9.55519 22.5309 9.54636 22.5221 9.54636C22.5132 9.53753 22.4956 9.5287 22.4691 9.51987C22.4514 9.51104 22.4205 9.48896 22.3764 9.45364H22.3631C22.3278 9.42715 22.2925 9.39625 22.2572 9.36093C22.2218 9.31678 22.1953 9.28587 22.1777 9.26821V9.25497C22.1688 9.24614 22.1556 9.22848 22.1379 9.20199C22.1291 9.16667 22.1203 9.14459 22.1115 9.13576L18.8532 1.41391C18.7825 1.22848 18.7825 1.04305 18.8532 0.857616C18.9326 0.672185 19.0651 0.54415 19.2505 0.47351C19.4271 0.39404 19.6081 0.39404 19.7936 0.47351C19.9878 0.54415 20.1203 0.672185 20.1909 0.857616L22.787 6.99007L24.4956 2.92384C24.6192 2.62362 24.8443 2.47351 25.1711 2.47351C25.5066 2.47351 25.7406 2.62362 25.873 2.92384L27.5817 6.99007L30.1644 0.857616C30.2439 0.672185 30.3764 0.54415 30.5618 0.47351C30.7472 0.39404 30.9326 0.39404 31.1181 0.47351C31.3035 0.54415 31.4315 0.6766 31.5022 0.870861C31.5817 1.05629 31.5817 1.23731 31.5022 1.41391L28.2571 9.13576C28.2395 9.2064 28.1909 9.27704 28.1115 9.34768C28.1115 9.35651 28.107 9.36976 28.0982 9.38742C28.0629 9.40508 28.032 9.42715 28.0055 9.45364H27.9922L27.873 9.53311H27.8598C27.851 9.53311 27.8421 9.53753 27.8333 9.54636C27.8245 9.54636 27.7936 9.55519 27.7406 9.57285H27.7141C27.6876 9.58168 27.6435 9.58609 27.5817 9.58609C27.5287 9.58609 27.4889 9.58168 27.4624 9.57285H27.4227C27.3697 9.55519 27.3388 9.54636 27.33 9.54636C27.3212 9.53753 27.3035 9.53311 27.277 9.53311C27.2594 9.52428 27.2285 9.49779 27.1843 9.45364H27.1711ZM26.9567 9.80822L26.9414 9.79803C26.8412 9.73121 26.7501 9.64678 26.6799 9.54164C26.5918 9.45282 26.5492 9.34562 26.5274 9.27166L25.1842 6.09314L23.8353 9.28524C23.8168 9.33615 23.7911 9.39055 23.7664 9.44007L23.7363 9.50015L23.6569 9.57962L23.5987 9.69593L23.509 9.74078C23.5073 9.74245 23.5054 9.7443 23.5034 9.74632L23.3822 9.86755H23.3222L23.2163 9.94702H23.123L23.0435 9.98676H22.9516C22.8843 9.99861 22.8198 10 22.7736 10C22.7286 10 22.6698 9.99804 22.6076 9.98676H22.5475L22.4838 9.96551C22.4779 9.96356 22.4727 9.96181 22.4679 9.96026H22.3505L22.2767 9.88637C22.2655 9.88057 22.2544 9.87422 22.2434 9.86755H22.2251L22.1147 9.78477C22.0618 9.74511 22.0118 9.701 21.9644 9.6536L21.9482 9.63739L21.9339 9.61949C21.9181 9.59978 21.9058 9.58485 21.8965 9.57401C21.8901 9.56662 21.8865 9.56261 21.8851 9.56111L21.8845 9.56046L21.7637 9.43966V9.38691L21.7537 9.37193L21.742 9.32496L18.4689 1.56809C18.4689 1.56809 18.5731 1.84159 18.4663 1.56126C18.3595 1.28092 18.3595 0.990603 18.4663 0.710267L18.4693 0.702353L18.4727 0.694569C18.5939 0.411709 18.8054 0.203476 19.0918 0.0910897C19.372 -0.0314896 19.6659 -0.0283889 19.9459 0.0885468C20.2397 0.198487 20.4597 0.407219 20.5747 0.702463L22.7855 5.92497L24.1128 2.76625L24.1133 2.76486C24.2002 2.55466 24.3342 2.37059 24.5275 2.2417C24.7211 2.11265 24.9431 2.0596 25.171 2.0596C25.4015 2.0596 25.6253 2.11174 25.8216 2.23771C26.0186 2.36408 26.1587 2.54597 26.2517 2.75677L26.2546 2.76347L27.582 5.92265L29.7839 0.694566C29.9056 0.410601 30.1183 0.201845 30.4064 0.089773C30.6911 -0.0299299 30.9887 -0.0299244 31.2733 0.0897902C31.5685 0.204718 31.7772 0.424772 31.8871 0.718553C32.0048 1.00046 32.0072 1.29646 31.882 1.57843L28.6482 9.27351C28.6101 9.39603 28.5412 9.49795 28.464 9.58123L28.4067 9.69593L28.2904 9.75408L28.1769 9.86755H28.1175L28.0572 9.90775L28.0047 9.96026H27.8873C27.8826 9.96181 27.8773 9.96356 27.8714 9.96551L27.8077 9.98676H27.7596C27.6923 9.99861 27.6278 10 27.5816 10C27.5366 10 27.4777 9.99804 27.4155 9.98676H27.3555L27.2918 9.96551C27.2859 9.96356 27.2806 9.96181 27.2758 9.96026H27.1585L27.1112 9.91302L27.0919 9.90332C27.0352 9.875 26.9912 9.83805 26.9712 9.82088C26.9664 9.81676 26.9615 9.81253 26.9567 9.80822Z"
                      fill="#FF424E"
                    ></path>
                  </svg>
                  <span>{detailShipping?.method_name}</span>
                </p>
                <p>{detailShipping?.short_method_text}</p>
                <p>Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí Minh)</p>
                <p>{detailShipping?.method_fee_text}</p>
                <p class="warning-mess">
                  (ĐH được giao từ vùng giãn cách - Tiki đang cố gắng giao, bạn chờ Tiki nhé!)
                </p>
              </div>
            </Section>
          </DetailGroupSection>
          <DetailGroupSection>
            <Section>
              <div className="title">HÌNH THỨC THANH TOÁN</div>
              <div className="content">
                <p>{details?.payment?.method_text}</p>
              </div>
            </Section>
          </DetailGroupSection>
        </DetailGroup>
        <ProductList>
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Giảm giá</th>
                <th>Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-item">
                    <img
                      src="https://uat.tikicdn.com/cache/200x200/ts/product/ed/77/34/5ac094603998b37254d2c149d5d4f658.jpeg"
                      alt="Máy lạnh Toshiba new - ThuPhung - 4.10.21"
                    />
                    <div className="product-info">
                      <a className="product-name" href="/product-p2411778.html?spid=2411779">
                        Máy lạnh Toshiba new - ThuPhung - 4.10.21
                      </a>
                      <p className="product-seller">
                        Cung cấp bởi <a href="/cua-hang/tiki-trading">Tiki trading</a>
                      </p>
                      <p className="product-sku">Sku: 1304711755694</p>
                      <div className="product-review"></div>
                    </div>
                  </div>
                </td>
                <td className="price">3.100.000 ₫</td>
                <td className="quantity">1</td>
                <td className="discount-amount">0 ₫</td>
                <td className="raw-total">3.100.000 ₫</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <span>Tạm tính</span>
                </td>
                <td>3.100.000 ₫</td>
              </tr>
              <tr>
                <td colspan="4">
                  <span>Phí vận chuyển</span>
                </td>
                <td>39.300 ₫</td>
              </tr>
              <tr>
                <td colspan="4">
                  <span>Tổng cộng</span>
                </td>
                <td>
                  <span className="sum">3.139.300 ₫</span>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div className="astra-summary">
                    <div className="styles__StyledAstraSummary-sc-108xqhy-0 cGuauH">
                      <div className="sub-data"></div>
                      <div className="styles__FlexRow-sc-108xqhy-2 bVUYjq">
                        <div className="label label--main">Thưởng Astra*</div>
                        <div className="value">
                          <span className="value__main">
                            <svg
                              className="value__astra-icon"
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="10" cy="10" r="10" fill="non"></circle>
                              <g clip-path="url(#clip0_17203_537963)">
                                <path
                                  d="M11.4017 8.33958H12.9358L10 1L7.06418 8.33958H8.76754C8.97199 8.33958 9.15584 8.2151 9.23177 8.02527L10 6.1047L10.7054 7.86812C10.8193 8.15286 11.0951 8.33958 11.4017 8.33958Z"
                                  fill="url(#paint0_linear_17203_537963)"
                                ></path>
                                <path
                                  d="M12.6745 12.7909L10 11.2125L7.3255 12.7909L8.20759 10.5857C8.29842 10.3586 8.21168 10.0992 8.00256 9.97243L6.72163 9.19591L3.5 17.25L10 13.4139L16.5 17.25L13.2784 9.19591L11.9974 9.97243C11.7883 10.0992 11.7016 10.3586 11.7924 10.5857L12.6745 12.7909Z"
                                  fill="url(#paint1_linear_17203_537963)"
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_17203_537963"
                                  x1="10"
                                  y1="6.5"
                                  x2="10"
                                  y2="17"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#FF424E"></stop>
                                  <stop offset="1" stop-color="#5E5CE6"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_17203_537963"
                                  x1="10"
                                  y1="6.5"
                                  x2="10"
                                  y2="17"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#FF424E"></stop>
                                  <stop offset="1" stop-color="#5E5CE6"></stop>
                                </linearGradient>
                                <clipPath id="clip0_17203_537963">
                                  <rect
                                    width="13"
                                    height="16.25"
                                    fill="white"
                                    transform="translate(3.5 1)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            62,00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td className="footer-table">
                  <a title="Hủy đơn hàng" className="cancel-order">
                    Hủy đơn hàng
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </ProductList>
      </DetailList>
    </Detail>
  )
}

export default detail
