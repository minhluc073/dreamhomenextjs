import Layout from "@/components/layout/Layout";
import Carousel5 from "@/components/slider/Carousel5";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Property Listing"
      >
        <div>
          <section className="flat-contact  page-contact relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="heading-section">
                    <h2 className="font-2 fw-8 ">
                      We provide the most suitable and quality real estate.
                    </h2>
                    <p className="text-color-">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sed tristique metus proin id lorem odio
                    </p>
                  </div>
                  <div className="wrap-info">
                    <div className="box-info flex align-center">
                      <div className="icon-info">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M42.5742 38.0897L42.7 38.0394V37.904V23.749C42.7 23.1695 43.1704 22.699 43.75 22.699C44.3295 22.699 44.8 23.1695 44.8 23.749V38.749C44.8 39.179 44.5378 39.5638 44.1424 39.7261C44.1421 39.7262 44.1419 39.7263 44.1417 39.7264L31.6657 44.7158L31.7375 44.8952C31.7375 44.8974 31.7375 44.8994 31.7375 44.9015L31.6563 44.7187L31.6371 44.7272C31.3894 44.8262 31.113 44.8262 30.8654 44.7272L30.8462 44.7187L30.8074 44.7015H30.801L18.8243 39.9108L18.75 39.8811L18.6757 39.9108L6.64074 44.7233L6.64072 44.7233C6.5143 44.7739 6.382 44.799 6.25 44.799C6.04199 44.799 5.83872 44.7382 5.66233 44.6185C5.37414 44.4229 5.2 44.0971 5.2 43.749V21.249C5.2 20.8188 5.46227 20.4344 5.85956 20.2746C5.85958 20.2746 5.8596 20.2746 5.85962 20.2746L18.3281 15.2857L18.3282 15.2863L18.3507 15.2788L18.3509 15.2791L18.3623 15.2745C18.6118 15.1739 18.8907 15.1739 19.1402 15.2745L19.1401 15.2746L19.1448 15.2763L19.1648 15.2838L19.1987 15.2965H19.1989L26.6456 18.2772C26.6456 18.2772 26.6456 18.2772 26.6457 18.2772C27.1862 18.4939 27.4479 19.1052 27.2319 19.6419L27.2318 19.6421C27.0154 20.182 26.3971 20.4421 25.8673 20.2285L25.8668 20.2283L20.0743 17.9108L19.8 17.8011V18.0965V37.9015V38.0369L19.9257 38.0872L29.9257 42.0872L30.2 42.1969V41.9015V28.749C30.2 28.1695 30.6704 27.699 31.25 27.699C31.8295 27.699 32.3 28.1695 32.3 28.749V41.904V42.1994L32.5742 42.0897L42.5742 38.0897ZM18.2775 15.134L18.265 15.1028L18.265 15.1028L18.265 15.0965L18.2775 15.134ZM17.5743 38.0872L17.7 38.0369V37.9015V18.094V17.7986L17.4257 17.9083L7.42572 21.9083L7.3 21.9586V22.094V41.9015V42.1969L7.57428 42.0872L17.5743 38.0872Z"
                            fill="#8E8E93"
                            stroke="white"
                            strokeWidth="0.4"
                          />
                          <path
                            d="M32.6999 13.749C32.6999 11.792 34.2928 10.199 36.2499 10.199C38.2069 10.199 39.7999 11.792 39.7999 13.749C39.7999 15.7061 38.2069 17.299 36.2499 17.299C34.2928 17.299 32.6999 15.7061 32.6999 13.749ZM34.7999 13.749C34.7999 14.5495 35.4494 15.199 36.2499 15.199C37.0503 15.199 37.6999 14.5495 37.6999 13.749C37.6999 12.9486 37.0503 12.299 36.2499 12.299C35.4494 12.299 34.7999 12.9486 34.7999 13.749Z"
                            fill="#8E8E93"
                            stroke="white"
                            strokeWidth="0.4"
                          />
                          <path
                            d="M36.0971 24.4704L36.25 24.6518L36.4029 24.4704C37.7722 22.8466 39.3407 20.7865 40.5681 18.831C41.1818 17.8533 41.7126 16.8981 42.0906 16.0341C42.4666 15.1746 42.7 14.3865 42.7 13.749C42.7 10.1936 39.8054 7.29902 36.25 7.29902C32.6945 7.29902 29.8 10.1936 29.8 13.749C29.8 14.3871 30.0334 15.1755 30.4094 16.0351C30.7874 16.8993 31.3182 17.8544 31.9319 18.8319C33.1593 20.7872 34.7278 22.8466 36.0971 24.4704ZM27.7 13.749C27.7 9.03448 31.5355 5.19902 36.25 5.19902C40.9645 5.19902 44.8 9.03448 44.8 13.749C44.8 14.8262 44.3769 16.1323 43.7105 17.5145C43.0462 18.8922 42.1501 20.3255 41.2259 21.6512C39.3782 24.3016 37.43 26.5055 37.0314 26.9501C36.8312 27.1712 36.5474 27.299 36.25 27.299C35.9526 27.299 35.6688 27.1712 35.4686 26.9501C35.0699 26.5053 33.1217 24.3015 31.2741 21.6512C30.3499 20.3255 29.4538 18.8922 28.7895 17.5145C28.1231 16.1323 27.7 14.8262 27.7 13.749Z"
                            fill="#8E8E93"
                            stroke="white"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <h5 className="text-color-4">Office address</h5>
                        <h4 className="fw-4 text-color-">
                          2715 Ash Dr. San Jose, South Dakota 83475
                        </h4>
                      </div>
                    </div>
                    <div className="box-info flex align-center">
                      <div className="icon-info">
                        <svg
                          width={50}
                          height={51}
                          viewBox="0 0 50 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.4648 13.7812C26.4648 14.5902 27.1207 15.2461 27.9297 15.2461C28.7387 15.2461 29.3945 14.5902 29.3945 13.7812C29.3945 12.9723 28.7387 12.3164 27.9297 12.3164C27.1207 12.3164 26.4648 12.9723 26.4648 13.7812Z"
                            fill="#8E8E93"
                          />
                          <path
                            d="M32.3242 13.7812C32.3242 14.5902 32.9801 15.2461 33.7891 15.2461C34.598 15.2461 35.2539 14.5902 35.2539 13.7812C35.2539 12.9723 34.598 12.3164 33.7891 12.3164C32.9801 12.3164 32.3242 12.9723 32.3242 13.7812Z"
                            fill="#8E8E93"
                          />
                          <path
                            d="M38.1836 13.7812C38.1836 14.5902 38.8395 15.2461 39.6484 15.2461C40.4574 15.2461 41.1133 14.5902 41.1133 13.7812C41.1133 12.9723 40.4574 12.3164 39.6484 12.3164C38.8395 12.3164 38.1836 12.9723 38.1836 13.7812Z"
                            fill="#8E8E93"
                          />
                          <path
                            d="M22.6771 37.2188L27.0716 34.2891L35.8398 37.2188V43.0781C35.8398 44.6961 34.549 46.0078 32.931 46.0078C16.7508 46.0078 1.46484 30.8195 1.46484 14.6394C1.46484 13.0214 2.77656 11.7305 4.39453 11.7305H10.2539L13.1836 20.4987L10.2539 24.8933C12.1247 29.5703 18 35.3479 22.6771 37.2188Z"
                            stroke="#8E8E93"
                            strokeWidth="1.7"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.1406 13.7812C19.1406 18.6354 23.0756 22.5703 27.9297 22.5703V28.4297L33.7891 22.5703H39.6484C44.5025 22.5703 48.5352 18.6354 48.5352 13.7812C48.5352 8.92715 44.5025 4.99219 39.6484 4.99219H27.9297C23.0756 4.99219 19.1406 8.92715 19.1406 13.7812Z"
                            stroke="#8E8E93"
                            strokeWidth="1.7"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <h5 className="text-color-4">Request a call back</h5>
                        <Link href="/tel:0123456789">
                          <h4 className="fw-8 font-2 fs-30 text-color-3 lh-37">
                            314-555-0123
                          </h4>
                        </Link>
                      </div>
                    </div>
                    <div className="box-info flex align-center">
                      <div className="icon-info">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1505_28697)">
                            <path
                              d="M36.6559 17.8341L36.6559 17.8341L36.6609 17.8392C36.8315 18.0113 37.0549 18.0969 37.2788 18.0969C37.5021 18.0969 37.7258 18.0116 37.8976 17.8411C38.2409 17.5005 38.241 16.9425 37.8996 16.5985C37.5586 16.2548 37.0037 16.2526 36.66 16.5934L36.6559 17.8341ZM36.6559 17.8341L36.6551 17.8332M36.6559 17.8341L36.6551 17.8332M36.6551 17.8332C36.3141 17.4895 36.3163 16.9345 36.66 16.5935L36.6551 17.8332Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M46.4639 27.8825H46.7054L46.5346 27.7118L39.3343 20.5115C38.992 20.1691 38.992 19.6141 39.3343 19.2718C39.6767 18.9296 40.2317 18.9296 40.574 19.2718L49.6441 28.3419C49.8085 28.5063 49.9009 28.7294 49.901 28.9618C49.901 29.1943 49.8086 29.4172 49.6442 29.5816L34.0757 45.1502C33.9114 45.3145 33.6884 45.4069 33.4559 45.4069C33.2235 45.4069 33.0005 45.3145 32.8361 45.1502L9.34306 21.6572C9.34306 21.6572 9.34305 21.6572 9.34305 21.6572C9.00075 21.3148 9.00076 20.7598 9.34305 20.4175L24.9114 4.84884C25.2537 4.50664 25.8087 4.50664 26.151 4.84884C26.151 4.84884 26.151 4.84884 26.1511 4.84884L34.9723 13.67C35.3146 14.0124 35.3146 14.5675 34.9723 14.9098C34.6299 15.252 34.0749 15.2519 33.7326 14.9098L26.7811 7.95839L26.6104 7.78768V8.0291V25.1994C26.6104 26.679 27.8139 27.8825 29.2935 27.8825H46.4639ZM24.8575 7.62373V7.38231L24.6868 7.55302L12.2497 19.9901L12.079 20.1608H12.3204H24.7575H24.8575V20.0608V7.62373ZM32.4087 42.2434L32.5794 42.4141V42.1727V29.7356V29.6356H32.4794H29.2937C26.8477 29.6356 24.8575 27.6455 24.8575 25.1994V22.0139V21.9139H24.7575H12.3204H12.079L12.2497 22.0846L32.4087 42.2434ZM34.3324 42.1728V42.4142L34.5031 42.2435L46.9401 29.8064L47.1108 29.6356H46.8694H34.4324H34.3324V29.7356V42.1728Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M0.976562 24.9047H6.70225C7.18637 24.9047 7.57881 25.2972 7.57881 25.7812C7.57881 26.2654 7.18637 26.6578 6.70225 26.6578H0.976562C0.492442 26.6578 0.1 26.2653 0.1 25.7812C0.1 25.2972 0.492442 24.9047 0.976562 24.9047Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M9.59961 24.9047H9.61426C10.0984 24.9047 10.4908 25.2972 10.4908 25.7812C10.4908 26.2653 10.0984 26.6578 9.61426 26.6578H9.59961C9.11549 26.6578 8.72305 26.2653 8.72305 25.7812C8.72305 25.2972 9.11549 24.9047 9.59961 24.9047Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M0.978516 14.6508H4.10381C4.58793 14.6508 4.98037 15.0433 4.98037 15.5273C4.98037 16.0114 4.58793 16.4039 4.10381 16.4039H0.978516C0.494395 16.4039 0.101953 16.0114 0.101953 15.5273C0.101953 15.0433 0.494395 14.6508 0.978516 14.6508Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M7.29315 14.6508H10.9873C11.4714 14.6508 11.8639 15.0433 11.8639 15.5273C11.8639 16.0114 11.4714 16.4039 10.9873 16.4039H7.29315C6.80903 16.4039 6.41659 16.0114 6.41659 15.5273C6.41659 15.0433 6.80903 14.6508 7.29315 14.6508Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M7.64453 30.2758H13.1132C13.5972 30.2758 13.9897 30.6683 13.9897 31.1523C13.9897 31.6364 13.5973 32.0289 13.1132 32.0289H7.64453C7.16041 32.0289 6.76797 31.6364 6.76797 31.1523C6.76797 30.6683 7.16041 30.2758 7.64453 30.2758Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                            <path
                              d="M3.61328 36.5258H17.3827C17.8668 36.5258 18.2593 36.9183 18.2593 37.4023C18.2593 37.8864 17.8668 38.2789 17.3827 38.2789H3.61328C3.12916 38.2789 2.73672 37.8864 2.73672 37.4023C2.73672 36.9183 3.12916 36.5258 3.61328 36.5258Z"
                              fill="#8E8E93"
                              stroke="white"
                              strokeWidth="0.2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1505_28697">
                              <rect width={50} height={50} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="content">
                        <h5 className="text-color-4">Email us</h5>
                        <Link href="/info:hellosupport@gmail.com">
                          <h4 className="fw-4 text-color-3">
                            hellosupport@gmail.com
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="images z-2 relative">
                    <img
                      src="/assets/images/mark/mark-contact3.png"
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="mark-img">
              <img src="/assets/images/mark/mark-vector.png" alt="images">
          </div> */}
          </section>
          <section className="flat-map">
            <div className="container-fuild">
              <iframe
                className="map-content"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
          <section className="flat-contact-page page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div id="comments" className="comments bg-white">
                    <div className="heading-box center">
                      <div className="heading-title fs-30 fw-7 lh-45">
                        Contact form
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce sed tristique metus proin id lorem odio
                      </p>
                    </div>
                    <div className="respond-comment">
                      <form
                        method="post"
                        id="contactform"
                        className="comment-form form-submit"
                        action="./contact/contact-process.php"
                        acceptCharset="utf-8"
                        noValidate="novalidate"
                      >
                        <div className="text-wrap flex form-wg">
                          <fieldset className="info-box">
                            <label className="fw-6">Your name</label>
                            <input
                              type="text"
                              className="tb-my-input"
                              name="text"
                              placeholder="Your name"
                              required
                            />
                          </fieldset>
                          <fieldset className="info-box">
                            <label className="fw-6">Email or phone</label>
                            <input
                              type="email"
                              className="tb-my-input"
                              name="email"
                              placeholder="Email or phone number"
                              required
                            />
                          </fieldset>
                          <div className="info-box">
                            <label className="fw-6">Property type</label>
                            <div className="select-wrapper">
                              <select
                                className="nice-select relative"
                                tabIndex={0}
                              >
                                <span className="current">Choose</span>

                                <option value className="option">
                                  Choose
                                </option>
                                <option value="America" className="option">
                                  Apartment
                                </option>
                                <option value="England" className="option">
                                  House
                                </option>
                                <option value="VietNam" className="option">
                                  Rent
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <fieldset className="message-wrap">
                          <label className="fw-6">Message</label>
                          <textarea
                            id="comment-message"
                            name="message"
                            rows={4}
                            tabIndex={4}
                            placeholder="Your message"
                            aria-required="true"
                          />
                        </fieldset>
                        <div className="button-boxs">
                          <button
                            className="sc-button btn-icon"
                            name="submit"
                            type="submit"
                          >
                            <svg
                              width={19}
                              height={18}
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1505_28737)">
                                <path
                                  d="M17.7381 0.0295345L0.899726 5.53166C0.424186 5.68706 0.355417 6.33388 0.788208 6.58552L7.1516 10.2857C7.24979 10.3428 7.36258 10.3699 7.47599 10.3635C7.5894 10.3572 7.69846 10.3177 7.78965 10.2499L9.57844 8.92152L8.25002 10.7103C8.1823 10.8015 8.14281 10.9106 8.13645 11.024C8.13009 11.1374 8.15714 11.2502 8.21424 11.3484L11.9144 17.7118C12.1664 18.1449 12.813 18.0754 12.9683 17.6003L18.4705 0.76186C18.618 0.309727 18.1881 -0.117584 17.7381 0.0295345ZM12.2669 16.0078L9.41045 11.0954L12.8548 6.45741C12.9378 6.34558 12.9779 6.20763 12.9676 6.06873C12.9574 5.92984 12.8976 5.79924 12.7991 5.70076C12.7006 5.60228 12.57 5.54247 12.4311 5.53225C12.2923 5.52203 12.1543 5.56207 12.0425 5.64507L7.40447 9.08947L2.49215 6.233L17.0112 1.48874L12.2669 16.0078ZM6.59633 12.7247L2.74099 16.58C2.51425 16.8067 2.1466 16.8068 1.91987 16.58C1.69309 16.3533 1.69309 15.9856 1.91987 15.7589L5.77521 11.9036C6.00202 11.6769 6.36967 11.6768 6.59633 11.9036C6.82311 12.1303 6.82311 12.498 6.59633 12.7247ZM1.50311 12.8706C1.27634 12.6438 1.27634 12.2762 1.50311 12.0495L3.02438 10.5282C3.25112 10.3014 3.61877 10.3014 3.8455 10.5282C4.07228 10.7549 4.07228 11.1226 3.8455 11.3493L2.32424 12.8706C2.09754 13.0973 1.72985 13.0973 1.50311 12.8706ZM7.97175 14.6544C8.19852 14.8811 8.19852 15.2488 7.97175 15.4755L6.45045 16.9968C6.3966 17.0508 6.33261 17.0936 6.26215 17.1228C6.1917 17.152 6.11617 17.167 6.0399 17.1669C5.52724 17.1669 5.26254 16.5424 5.62936 16.1756L7.15066 14.6544C7.37736 14.4276 7.74501 14.4276 7.97175 14.6544Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1505_28737">
                                  <rect
                                    width={18}
                                    height={18}
                                    fill="white"
                                    transform="translate(0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>Send request</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flat-brand tf-section center page-contact relative">
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-section">
                    <h5>Trusted by over 150+ major companies</h5>
                  </div>
                  <div className="swiper-container carousel-5">
                    <Carousel5 />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
