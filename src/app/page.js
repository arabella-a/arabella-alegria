import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.name}>
          <div className={styles.firstName}>
              <svg width="641" height="117" viewBox="0 0 641 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.28 114.976C2.75467 113.611 4.80267 111.861 6.424 109.728C8.13067 107.509 9.66667 104.864 11.032 101.792C17.688 85.2373 23.6613 70.2187 28.952 56.736C31.256 51.0187 33.4747 45.3867 35.608 39.84C37.8267 34.208 39.832 29.1307 41.624 24.608C43.416 20 44.9093 16.16 46.104 13.088C47.384 10.016 48.152 8.096 48.408 7.328C48.4933 7.24266 48.536 7.15733 48.536 7.072H49.56L90.392 101.92C92.3547 106.443 94.1467 109.6 95.768 111.392C97.4747 113.184 99.1813 114.379 100.888 114.976V116C97.56 115.744 94.5733 115.573 91.928 115.488C89.368 115.403 86.8507 115.36 84.376 115.36C81.9013 115.36 79.2987 115.403 76.568 115.488C73.8373 115.573 70.68 115.744 67.096 116C62.8293 116 59.288 114.933 56.472 112.8C53.7413 110.581 51.352 107.893 49.304 104.736C47.3413 101.493 45.592 98.0373 44.056 94.368C42.52 90.6133 40.856 87.2 39.064 84.128C37.272 81.056 35.1387 78.5813 32.664 76.704C30.1893 74.7413 27.0747 73.888 23.32 74.144C22.2107 77.0453 21.1013 79.8613 19.992 82.592C18.968 85.2373 17.9867 87.712 17.048 90.016C16.1947 92.32 15.384 94.368 14.616 96.16C13.9333 97.952 13.3787 99.4027 12.952 100.512C11.7573 103.669 11.544 106.613 12.312 109.344C13.1653 111.989 15.4267 113.867 19.096 114.976V116C17.2187 115.829 15.5973 115.701 14.232 115.616C12.8667 115.531 11.5867 115.488 10.392 115.488C8.77067 115.488 7.192 115.531 5.656 115.616C4.12 115.701 2.328 115.829 0.28 116V114.976ZM41.24 29.216C40.5573 30.8373 39.6187 33.2267 38.424 36.384C37.2293 39.456 35.8213 42.9973 34.2 47.008C32.664 50.9333 31 55.1147 29.208 59.552C27.416 63.9893 25.6667 68.384 23.96 72.736C27.2027 72.6507 30.1893 73.4187 32.92 75.04C35.736 76.9173 38.04 79.52 39.832 82.848C41.7093 86.0907 43.4587 89.504 45.08 93.088C46.1893 95.5627 47.3413 98.08 48.536 100.64C49.816 103.2 51.3093 105.504 53.016 107.552C54.7227 109.6 56.728 111.307 59.032 112.672C61.336 113.952 64.024 114.592 67.096 114.592C68.888 114.592 70.2533 114.165 71.192 113.312C72.216 112.459 72.8987 111.392 73.24 110.112C73.5813 108.747 73.5813 107.253 73.24 105.632C72.984 103.925 72.5147 102.176 71.832 100.384C71.7467 100.213 71.704 100.085 71.704 100C71.704 99.9147 71.6613 99.8293 71.576 99.744C71.4907 99.6587 71.448 99.5733 71.448 99.488C67.5227 90.3573 64.1947 82.592 61.464 76.192C58.7333 69.792 56.3867 64.416 54.424 60.064C52.5467 55.6267 51.0107 52 49.816 49.184C48.6213 46.2827 47.5547 43.7653 46.616 41.632C45.6773 39.4133 44.7813 37.408 43.928 35.616C43.16 33.7387 42.264 31.6053 41.24 29.216ZM106.733 114.72C110.914 114.72 113.602 113.653 114.797 111.52C116.077 109.301 116.76 105.888 116.845 101.28V47.264C116.845 44.6187 116.802 42.272 116.717 40.224C116.717 38.176 116.461 36.4693 115.949 35.104C115.522 33.6533 114.754 32.544 113.645 31.776C112.536 31.008 110.914 30.5387 108.781 30.368V29.088C110.573 28.9173 112.536 28.6613 114.669 28.32C116.888 27.9787 119.064 27.552 121.197 27.04C123.416 26.528 125.592 25.9733 127.725 25.376C129.858 24.6933 131.778 23.968 133.485 23.2V58.656C133.997 54.4747 135.106 50.5067 136.813 46.752C138.605 42.9973 141.037 39.7547 144.109 37.024C147.266 34.2933 151.064 32.2027 155.501 30.752C160.024 29.3013 165.314 28.7467 171.373 29.088L171.117 45.728C169.154 45.3013 167.192 45.0027 165.229 44.832C163.266 44.576 161.346 44.448 159.469 44.448C155.714 44.448 152.258 44.9173 149.101 45.856C145.944 46.7947 143.213 48.2027 140.909 50.08C138.605 51.9573 136.77 54.3467 135.405 57.248C134.125 60.1493 133.485 63.5627 133.485 67.488V102.048C133.57 106.4 134.253 109.6 135.533 111.648C136.898 113.696 139.586 114.72 143.597 114.72V116C139.33 115.829 135.874 115.701 133.229 115.616C130.584 115.445 128.109 115.36 125.805 115.36C123.33 115.36 120.77 115.445 118.125 115.616C115.48 115.701 111.938 115.829 107.501 116H106.733V114.72ZM164.108 90.784C164.108 86.7733 164.961 83.3173 166.668 80.416C168.375 77.4293 170.679 74.912 173.58 72.864C176.481 70.816 179.852 69.152 183.692 67.872C187.532 66.592 191.585 65.6107 195.852 64.928C191.927 64.16 188.684 62.752 186.124 60.704C183.649 58.5707 181.9 56.1813 180.876 53.536C179.852 50.8907 179.511 48.1173 179.852 45.216C180.279 42.3147 181.388 39.6693 183.18 37.28C184.972 34.8907 187.404 32.928 190.476 31.392C193.633 29.7707 197.431 28.96 201.868 28.96C207.159 28.96 212.108 29.472 216.716 30.496C221.409 31.4347 225.548 33.0133 229.132 35.232C232.716 37.4507 235.617 40.3947 237.836 44.064C240.14 47.648 241.505 52.0853 241.932 57.376C242.017 57.888 242.06 58.4427 242.06 59.04C242.06 59.552 242.103 60.1067 242.188 60.704C239.201 60.2773 236.3 60.0213 233.484 59.936C230.753 59.8507 228.151 59.808 225.676 59.808C225.42 55.5413 224.823 51.6587 223.884 48.16C223.031 44.576 221.665 41.504 219.788 38.944C217.911 36.2987 215.479 34.2507 212.492 32.8C209.505 31.264 205.879 30.4533 201.612 30.368C196.492 30.368 192.268 31.4773 188.94 33.696C185.697 35.9147 183.479 38.6453 182.284 41.888C181.26 44.448 180.919 47.0507 181.26 49.696C181.601 52.3413 182.583 54.7307 184.204 56.864C185.911 58.912 188.215 60.6187 191.116 61.984C194.017 63.3493 197.473 64.0747 201.484 64.16C204.983 63.7333 208.396 63.4773 211.724 63.392C215.137 63.2213 218.465 63.0933 221.708 63.008H222.476C231.009 63.008 239.543 63.7333 248.076 65.184C256.609 66.5493 264.673 69.3227 272.268 73.504V18.976C272.183 17.2693 272.012 15.776 271.756 14.496C271.585 13.1307 271.201 12.0213 270.604 11.168C270.007 10.2293 269.196 9.504 268.172 8.992C267.148 8.47999 265.825 8.13866 264.204 7.96799V6.688C265.996 6.51733 267.959 6.26133 270.092 5.92C272.311 5.57866 274.487 5.152 276.62 4.63999C278.839 4.12799 280.972 3.57333 283.02 2.976C285.153 2.29333 287.116 1.568 288.908 0.799995V60.064C289.676 55.1147 291.084 50.72 293.132 46.88C295.18 43.04 297.612 39.7973 300.428 37.152C303.329 34.5067 306.572 32.5013 310.156 31.136C313.74 29.6853 317.452 28.96 321.292 28.96C327.521 28.96 332.983 30.0267 337.676 32.16C342.369 34.208 346.295 37.152 349.452 40.992C352.609 44.832 354.999 49.4827 356.62 54.944C358.241 60.32 359.052 66.336 359.052 72.992C359.052 79.7333 358.113 85.792 356.236 91.168C354.359 96.4587 351.713 100.939 348.3 104.608C344.972 108.277 341.004 111.093 336.396 113.056C331.788 114.933 326.796 115.872 321.42 115.872C318.092 115.957 314.892 115.488 311.82 114.464C308.748 113.355 305.889 111.861 303.244 109.984C300.684 108.107 298.38 105.888 296.332 103.328C294.284 100.768 292.62 97.952 291.34 94.88C289.207 90.272 286.305 86.2613 282.636 82.848C279.052 79.4347 275.041 76.576 270.604 74.272C266.252 71.8827 261.601 70.0053 256.652 68.64C251.788 67.2747 246.967 66.2507 242.188 65.568V90.528C242.188 93.6 242.188 96.5867 242.188 99.488C242.273 102.304 242.572 104.864 243.084 107.168C243.596 109.387 244.449 111.179 245.644 112.544C246.839 113.909 248.631 114.592 251.02 114.592V115.872C246.583 115.872 242.785 115.531 239.628 114.848C236.471 114.165 233.868 113.056 231.82 111.52C229.772 109.899 228.236 107.765 227.212 105.12C226.273 102.389 225.804 98.976 225.804 94.88C223.415 101.536 219.66 106.699 214.54 110.368C209.42 114.037 202.935 115.915 195.084 116C190.049 116.085 185.569 115.573 181.644 114.464C177.804 113.269 174.561 111.563 171.916 109.344C169.356 107.125 167.393 104.48 166.028 101.408C164.748 98.2507 164.108 94.7093 164.108 90.784ZM288.908 72.48C288.908 75.9787 289.079 79.4773 289.42 82.976C289.761 86.4747 290.657 89.8453 292.108 93.088C292.279 93.6853 292.535 94.2827 292.876 94.88L293.132 95.52C294.412 98.2507 296.033 100.811 297.996 103.2C299.959 105.504 302.135 107.509 304.524 109.216C306.999 110.923 309.644 112.245 312.46 113.184C315.361 114.123 318.348 114.549 321.42 114.464C325.345 114.464 328.673 113.397 331.404 111.264C334.135 109.131 336.311 106.229 337.932 102.56C339.639 98.8053 340.833 94.4107 341.516 89.376C342.284 84.256 342.668 78.7947 342.668 72.992C342.668 68.384 342.412 63.5627 341.9 58.528C341.473 53.4933 340.492 48.8853 338.956 44.704C337.42 40.5227 335.244 37.1093 332.428 34.464C329.612 31.7333 325.9 30.368 321.292 30.368C318.049 30.368 314.892 30.88 311.82 31.904C308.833 32.928 306.017 34.464 303.372 36.512C300.727 38.56 298.38 41.0773 296.332 44.064C294.284 47.0507 292.705 50.464 291.596 54.304C291.084 55.6693 290.657 57.1627 290.316 58.784C289.975 60.4053 289.719 62.0267 289.548 63.648C289.377 65.2693 289.207 66.848 289.036 68.384C288.951 69.92 288.908 71.2853 288.908 72.48ZM180.62 91.808C180.62 98.3787 182.071 103.499 184.972 107.168C187.873 110.837 192.567 112.672 199.052 112.672C202.721 112.672 206.177 112.117 209.42 111.008C212.748 109.813 215.607 107.936 217.996 105.376C220.385 102.816 222.263 99.488 223.628 95.392C225.079 91.296 225.804 86.304 225.804 80.416V64.544C225.633 64.4587 225.42 64.416 225.164 64.416H224.652C222.007 64.3307 219.063 64.3733 215.82 64.544C212.577 64.6293 209.335 64.9707 206.092 65.568C202.849 66.08 199.692 66.8907 196.62 68C193.548 69.1093 190.817 70.688 188.428 72.736C186.039 74.784 184.119 77.3867 182.668 80.544C181.303 83.616 180.62 87.3707 180.62 91.808ZM263.564 114.592C265.356 114.592 266.807 114.208 267.916 113.44C269.111 112.587 270.007 111.477 270.604 110.112C271.201 108.661 271.628 106.997 271.884 105.12C272.14 103.243 272.268 101.195 272.268 98.976V79.264C275.681 81.312 278.796 83.7013 281.612 86.432C284.428 89.1627 286.86 92.4053 288.908 96.16V115.872H263.564V114.592ZM221.708 64.544L224.652 64.416C224.14 64.416 223.628 64.416 223.116 64.416C222.604 64.416 222.135 64.4587 221.708 64.544ZM411.241 116.128C404.158 116.128 397.972 114.891 392.681 112.416C387.39 109.941 382.91 106.656 379.241 102.56C375.657 98.464 372.926 93.8133 371.049 88.608C369.257 83.4027 368.318 78.0693 368.233 72.608C368.233 67.1467 369.086 61.8133 370.793 56.608C372.585 51.4027 375.273 46.752 378.857 42.656C382.526 38.56 387.049 35.2747 392.425 32.8C397.886 30.3253 404.286 29.088 411.625 29.088C416.574 29.088 421.14 29.728 425.321 31.008C429.588 32.288 433.428 34.08 436.841 36.384C440.254 38.688 443.198 41.4613 445.673 44.704C448.148 47.8613 450.153 51.36 451.689 55.2C450.665 55.3707 449.086 55.6693 446.953 56.096C444.82 56.4373 442.302 56.864 439.401 57.376C436.585 57.888 433.428 58.4427 429.929 59.04C426.43 59.6373 422.804 60.2773 419.049 60.96C424.681 61.0453 429.502 61.8987 433.513 63.52C437.609 65.056 440.937 67.0613 443.497 69.536C446.142 71.9253 448.02 74.6987 449.129 77.856C450.324 80.928 450.793 84.0853 450.537 87.328C450.366 90.4853 449.513 93.6427 447.977 96.8C446.526 99.872 444.436 102.603 441.705 104.992C437.865 108.405 433.428 111.136 428.393 113.184C423.358 115.147 417.641 116.128 411.241 116.128ZM385.385 66.976C385.044 72.1813 385.214 77.6 385.897 83.232C386.58 88.7787 387.945 93.8987 389.993 98.592C392.041 103.2 394.814 107.04 398.313 110.112C401.812 113.099 406.249 114.635 411.625 114.72C417.769 114.635 423.23 113.653 428.009 111.776C432.873 109.813 437.14 107.211 440.809 103.968C444.99 100.213 447.636 95.8187 448.745 90.784C449.854 85.7493 449.3 80.9707 447.081 76.448C445.716 73.7173 444.009 71.456 441.961 69.664C439.913 67.872 437.609 66.464 435.049 65.44C432.574 64.3307 429.886 63.5627 426.985 63.136C424.084 62.7093 421.14 62.496 418.153 62.496C415.081 62.496 412.009 62.6667 408.937 63.008C405.95 63.3493 403.006 63.776 400.105 64.288C397.289 64.7147 394.601 65.184 392.041 65.696C389.566 66.208 387.348 66.6347 385.385 66.976ZM385.385 65.568C388.372 65.056 391.529 64.5013 394.857 63.904C398.27 63.3067 401.769 62.6667 405.353 61.984C410.9 61.0453 416.361 60.1067 421.737 59.168C427.198 58.144 432.148 57.248 436.585 56.48C435.902 53.152 434.921 49.952 433.641 46.88C432.446 43.7227 430.825 40.9493 428.777 38.56C426.814 36.0853 424.382 34.1227 421.481 32.672C418.665 31.2213 415.337 30.496 411.497 30.496C406.718 30.496 402.708 31.6053 399.465 33.824C396.308 35.9573 393.705 38.7307 391.657 42.144C389.694 45.5573 388.201 49.3547 387.177 53.536C386.238 57.632 385.641 61.6427 385.385 65.568ZM479.29 115.488C476.218 115.488 473.146 115.531 470.074 115.616C467.002 115.701 463.93 115.829 460.858 116V114.72C465.039 114.72 467.727 113.653 468.922 111.52C470.202 109.301 470.885 105.888 470.97 101.28V24.992C470.97 22.3467 470.927 20 470.842 17.952C470.842 15.904 470.586 14.1973 470.074 12.832C469.647 11.3813 468.879 10.272 467.77 9.504C466.661 8.736 465.039 8.26666 462.906 8.09599V6.81599C464.698 6.64533 466.661 6.38933 468.794 6.048C471.013 5.70666 473.189 5.28 475.322 4.768C477.541 4.25599 479.717 3.70133 481.85 3.104C483.983 2.42133 485.903 1.69599 487.61 0.927994V102.048C487.695 106.4 488.378 109.6 489.658 111.648C491.023 113.696 493.711 114.72 497.722 114.72V116C494.65 115.829 491.578 115.701 488.506 115.616C485.434 115.531 482.362 115.488 479.29 115.488ZM525.415 115.488C522.343 115.488 519.271 115.531 516.199 115.616C513.127 115.701 510.055 115.829 506.983 116V114.72C511.164 114.72 513.852 113.653 515.047 111.52C516.327 109.301 517.01 105.888 517.095 101.28V24.992C517.095 22.3467 517.052 20 516.967 17.952C516.967 15.904 516.711 14.1973 516.199 12.832C515.772 11.3813 515.004 10.272 513.895 9.504C512.786 8.736 511.164 8.26666 509.031 8.09599V6.81599C510.823 6.64533 512.786 6.38933 514.919 6.048C517.138 5.70666 519.314 5.28 521.447 4.768C523.666 4.25599 525.842 3.70133 527.975 3.104C530.108 2.42133 532.028 1.69599 533.735 0.927994V102.048C533.82 106.4 534.503 109.6 535.783 111.648C537.148 113.696 539.836 114.72 543.847 114.72V116C540.775 115.829 537.703 115.701 534.631 115.616C531.559 115.531 528.487 115.488 525.415 115.488ZM553.108 90.784C553.108 86.7733 553.961 83.3173 555.668 80.416C557.375 77.4293 559.679 74.912 562.58 72.864C565.481 70.816 568.852 69.1947 572.692 68C576.532 66.72 580.585 65.696 584.852 64.928C580.927 64.16 577.684 62.752 575.124 60.704C572.649 58.656 570.9 56.3093 569.876 53.664C568.852 50.9333 568.511 48.16 568.852 45.344C569.279 42.4427 570.388 39.7973 572.18 37.408C573.972 34.9333 576.404 32.928 579.476 31.392C582.633 29.856 586.431 29.088 590.868 29.088C596.159 29.088 601.108 29.6 605.716 30.624C610.409 31.5627 614.548 33.1413 618.132 35.36C621.716 37.5787 624.617 40.5227 626.836 44.192C629.14 47.776 630.505 52.2133 630.932 57.504C631.103 58.9547 631.188 60.448 631.188 61.984C631.188 63.4347 631.188 64.928 631.188 66.464V90.656C631.188 93.728 631.188 96.7147 631.188 99.616C631.273 102.432 631.572 104.949 632.084 107.168C632.596 109.387 633.449 111.179 634.644 112.544C635.839 113.909 637.631 114.592 640.02 114.592V116C635.583 116 631.785 115.659 628.628 114.976C625.471 114.293 622.868 113.184 620.82 111.648C618.772 110.027 617.236 107.851 616.212 105.12C615.273 102.389 614.804 98.976 614.804 94.88C612.415 101.621 608.66 106.827 603.54 110.496C598.42 114.165 591.935 116.043 584.084 116.128C573.929 116.299 566.207 114.08 560.916 109.472C555.711 104.864 553.108 98.6347 553.108 90.784ZM569.62 91.936C569.62 98.4213 571.071 103.541 573.972 107.296C576.873 110.965 581.567 112.8 588.052 112.8C591.721 112.8 595.177 112.245 598.42 111.136C601.748 109.941 604.607 108.064 606.996 105.504C609.385 102.944 611.263 99.616 612.628 95.52C614.079 91.424 614.804 86.3893 614.804 80.416V64.544C612.159 64.544 609.215 64.5867 605.972 64.672C602.729 64.672 599.401 64.928 595.988 65.44C592.66 65.952 589.417 66.7627 586.26 67.872C583.103 68.9813 580.287 70.56 577.812 72.608C575.337 74.656 573.332 77.2587 571.796 80.416C570.345 83.5733 569.62 87.4133 569.62 91.936ZM570.132 48.16C570.217 50.0373 570.687 52 571.54 54.048C573.332 57.7173 575.935 60.32 579.348 61.856C582.847 63.392 586.559 64.16 590.484 64.16C594.068 63.7333 597.567 63.4773 600.98 63.392C604.393 63.2213 607.721 63.136 610.964 63.136H614.804C614.719 58.4427 614.249 54.1333 613.396 50.208C612.628 46.1973 611.305 42.784 609.428 39.968C607.551 37.0667 605.076 34.8053 602.004 33.184C599.017 31.4773 595.22 30.5813 590.612 30.496C587.967 30.496 585.407 30.88 582.932 31.648C580.457 32.3307 578.281 33.44 576.404 34.976C574.527 36.4267 572.991 38.2613 571.796 40.48C570.687 42.6987 570.132 45.2587 570.132 48.16Z" fill="#ECECEC"/>
              </svg>
          </div>
          <div className={styles.lastName}>
            <svg width="539" height="149" viewBox="0 0 539 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.28 114.976C2.75467 113.611 4.80267 111.861 6.424 109.728C8.13067 107.509 9.66667 104.864 11.032 101.792C17.688 85.2373 23.6613 70.2187 28.952 56.736C31.256 51.0187 33.4747 45.3867 35.608 39.84C37.8267 34.208 39.832 29.1307 41.624 24.608C43.416 20 44.9093 16.16 46.104 13.088C47.384 10.016 48.152 8.096 48.408 7.328C48.4933 7.24266 48.536 7.15733 48.536 7.072H49.56L90.392 101.92C92.3547 106.443 94.1467 109.6 95.768 111.392C97.4747 113.184 99.1813 114.379 100.888 114.976V116C97.56 115.744 94.5733 115.573 91.928 115.488C89.368 115.403 86.8507 115.36 84.376 115.36C81.9013 115.36 79.2987 115.403 76.568 115.488C73.8373 115.573 70.68 115.744 67.096 116C62.8293 116 59.288 114.933 56.472 112.8C53.7413 110.581 51.352 107.893 49.304 104.736C47.3413 101.493 45.592 98.0373 44.056 94.368C42.52 90.6133 40.856 87.2 39.064 84.128C37.272 81.056 35.1387 78.5813 32.664 76.704C30.1893 74.7413 27.0747 73.888 23.32 74.144C22.2107 77.0453 21.1013 79.8613 19.992 82.592C18.968 85.2373 17.9867 87.712 17.048 90.016C16.1947 92.32 15.384 94.368 14.616 96.16C13.9333 97.952 13.3787 99.4027 12.952 100.512C11.7573 103.669 11.544 106.613 12.312 109.344C13.1653 111.989 15.4267 113.867 19.096 114.976V116C17.2187 115.829 15.5973 115.701 14.232 115.616C12.8667 115.531 11.5867 115.488 10.392 115.488C8.77067 115.488 7.192 115.531 5.656 115.616C4.12 115.701 2.328 115.829 0.28 116V114.976ZM41.24 29.216C40.5573 30.8373 39.6187 33.2267 38.424 36.384C37.2293 39.456 35.8213 42.9973 34.2 47.008C32.664 50.9333 31 55.1147 29.208 59.552C27.416 63.9893 25.6667 68.384 23.96 72.736C27.2027 72.6507 30.1893 73.4187 32.92 75.04C35.736 76.9173 38.04 79.52 39.832 82.848C41.7093 86.0907 43.4587 89.504 45.08 93.088C46.1893 95.5627 47.3413 98.08 48.536 100.64C49.816 103.2 51.3093 105.504 53.016 107.552C54.7227 109.6 56.728 111.307 59.032 112.672C61.336 113.952 64.024 114.592 67.096 114.592C68.888 114.592 70.2533 114.165 71.192 113.312C72.216 112.459 72.8987 111.392 73.24 110.112C73.5813 108.747 73.5813 107.253 73.24 105.632C72.984 103.925 72.5147 102.176 71.832 100.384C71.7467 100.213 71.704 100.085 71.704 100C71.704 99.9147 71.6613 99.8293 71.576 99.744C71.4907 99.6587 71.448 99.5733 71.448 99.488C67.5227 90.3573 64.1947 82.592 61.464 76.192C58.7333 69.792 56.3867 64.416 54.424 60.064C52.5467 55.6267 51.0107 52 49.816 49.184C48.6213 46.2827 47.5547 43.7653 46.616 41.632C45.6773 39.4133 44.7813 37.408 43.928 35.616C43.16 33.7387 42.264 31.6053 41.24 29.216ZM125.165 115.488C122.093 115.488 119.021 115.531 115.949 115.616C112.877 115.701 109.805 115.829 106.733 116V114.72C110.914 114.72 113.602 113.653 114.797 111.52C116.077 109.301 116.76 105.888 116.845 101.28V24.992C116.845 22.3467 116.802 20 116.717 17.952C116.717 15.904 116.461 14.1973 115.949 12.832C115.522 11.3813 114.754 10.272 113.645 9.504C112.536 8.736 110.914 8.26666 108.781 8.09599V6.81599C110.573 6.64533 112.536 6.38933 114.669 6.048C116.888 5.70666 119.064 5.28 121.197 4.768C123.416 4.25599 125.592 3.70133 127.725 3.104C129.858 2.42133 131.778 1.69599 133.485 0.927994V102.048C133.57 106.4 134.253 109.6 135.533 111.648C136.898 113.696 139.586 114.72 143.597 114.72V116C140.525 115.829 137.453 115.701 134.381 115.616C131.309 115.531 128.237 115.488 125.165 115.488ZM195.866 116.128C188.783 116.128 182.597 114.891 177.306 112.416C172.015 109.941 167.535 106.656 163.866 102.56C160.282 98.464 157.551 93.8133 155.674 88.608C153.882 83.4027 152.943 78.0693 152.858 72.608C152.858 67.1467 153.711 61.8133 155.418 56.608C157.21 51.4027 159.898 46.752 163.482 42.656C167.151 38.56 171.674 35.2747 177.05 32.8C182.511 30.3253 188.911 29.088 196.25 29.088C201.199 29.088 205.765 29.728 209.946 31.008C214.213 32.288 218.053 34.08 221.466 36.384C224.879 38.688 227.823 41.4613 230.298 44.704C232.773 47.8613 234.778 51.36 236.314 55.2C235.29 55.3707 233.711 55.6693 231.578 56.096C229.445 56.4373 226.927 56.864 224.026 57.376C221.21 57.888 218.053 58.4427 214.554 59.04C211.055 59.6373 207.429 60.2773 203.674 60.96C209.306 61.0453 214.127 61.8987 218.138 63.52C222.234 65.056 225.562 67.0613 228.122 69.536C230.767 71.9253 232.645 74.6987 233.754 77.856C234.949 80.928 235.418 84.0853 235.162 87.328C234.991 90.4853 234.138 93.6427 232.602 96.8C231.151 99.872 229.061 102.603 226.33 104.992C222.49 108.405 218.053 111.136 213.018 113.184C207.983 115.147 202.266 116.128 195.866 116.128ZM170.01 66.976C169.669 72.1813 169.839 77.6 170.522 83.232C171.205 88.7787 172.57 93.8987 174.618 98.592C176.666 103.2 179.439 107.04 182.938 110.112C186.437 113.099 190.874 114.635 196.25 114.72C202.394 114.635 207.855 113.653 212.634 111.776C217.498 109.813 221.765 107.211 225.434 103.968C229.615 100.213 232.261 95.8187 233.37 90.784C234.479 85.7493 233.925 80.9707 231.706 76.448C230.341 73.7173 228.634 71.456 226.586 69.664C224.538 67.872 222.234 66.464 219.674 65.44C217.199 64.3307 214.511 63.5627 211.61 63.136C208.709 62.7093 205.765 62.496 202.778 62.496C199.706 62.496 196.634 62.6667 193.562 63.008C190.575 63.3493 187.631 63.776 184.73 64.288C181.914 64.7147 179.226 65.184 176.666 65.696C174.191 66.208 171.973 66.6347 170.01 66.976ZM170.01 65.568C172.997 65.056 176.154 64.5013 179.482 63.904C182.895 63.3067 186.394 62.6667 189.978 61.984C195.525 61.0453 200.986 60.1067 206.362 59.168C211.823 58.144 216.773 57.248 221.21 56.48C220.527 53.152 219.546 49.952 218.266 46.88C217.071 43.7227 215.45 40.9493 213.402 38.56C211.439 36.0853 209.007 34.1227 206.106 32.672C203.29 31.2213 199.962 30.496 196.122 30.496C191.343 30.496 187.333 31.6053 184.09 33.824C180.933 35.9573 178.33 38.7307 176.282 42.144C174.319 45.5573 172.826 49.3547 171.802 53.536C170.863 57.632 170.266 61.6427 170.01 65.568ZM250.603 117.792L251.883 118.048C252.992 122.4 254.528 126.411 256.491 130.08C258.539 133.835 261.014 137.035 263.915 139.68C266.816 142.325 270.144 144.373 273.899 145.824C277.654 147.275 281.878 147.872 286.571 147.616C290.24 147.445 293.952 146.891 297.707 145.952C301.462 145.013 304.79 143.648 307.691 141.856C310.678 140.149 313.11 137.973 314.987 135.328C316.864 132.768 317.803 129.739 317.803 126.24C317.803 123.595 316.95 121.376 315.243 119.584C313.536 117.877 311.275 116.469 308.459 115.36C305.728 114.165 302.614 113.269 299.115 112.672C295.616 111.989 292.032 111.435 288.363 111.008C284.694 110.581 281.11 110.24 277.611 109.984C274.198 109.643 271.168 109.216 268.523 108.704C265.536 108.192 263.19 107.509 261.483 106.656C259.776 105.803 258.496 104.864 257.643 103.84C256.875 102.816 256.406 101.749 256.235 100.64C256.064 99.5307 256.064 98.464 256.235 97.44C256.491 95.7333 257.43 94.2827 259.051 93.088C260.672 91.808 262.635 90.7413 264.939 89.888C267.328 88.9493 269.846 88.224 272.491 87.712C275.222 87.2 277.824 86.8587 280.299 86.688C275.691 86.176 271.424 85.2373 267.499 83.872C263.659 82.4213 260.331 80.544 257.515 78.24C254.784 75.8507 252.651 72.992 251.115 69.664C249.579 66.336 248.811 62.5387 248.811 58.272C248.811 53.152 249.92 48.8 252.139 45.216C254.358 41.5467 257.216 38.5173 260.715 36.128C264.299 33.7387 268.31 31.9893 272.747 30.88C277.184 29.7707 281.622 29.216 286.059 29.216C288.278 29.216 290.582 29.4293 292.971 29.856C295.446 30.2827 297.792 30.752 300.011 31.264C303.424 27.0827 307.179 23.712 311.275 21.152C315.371 18.5067 319.936 17.184 324.971 17.184C326.592 17.184 328.47 17.3973 330.603 17.824L325.483 35.36H324.587C324.16 32.8 322.838 30.6667 320.619 28.96C318.4 27.2533 315.84 26.4 312.939 26.4C311.062 26.4 309.142 26.8267 307.179 27.68C305.302 28.5333 303.51 29.8987 301.803 31.776C304.619 32.7147 307.35 33.9947 309.995 35.616C312.64 37.152 314.944 39.0293 316.907 41.248C318.955 43.3813 320.576 45.8987 321.771 48.8C322.966 51.616 323.563 54.7307 323.563 58.144C323.563 63.52 322.496 68.0427 320.363 71.712C318.23 75.3813 315.328 78.4107 311.659 80.8C307.99 83.104 303.638 84.8533 298.603 86.048C293.654 87.1573 288.363 87.84 282.731 88.096C274.112 88.608 269.803 90.3147 269.803 93.216C269.803 94.8373 271.296 96.032 274.283 96.8C277.27 97.4827 280.982 98.08 285.419 98.592C289.942 99.0187 294.806 99.5733 300.011 100.256C305.216 100.939 310.038 102.048 314.475 103.584C318.998 105.12 322.752 107.339 325.739 110.24C328.726 113.056 330.219 116.896 330.219 121.76C330.219 126.795 328.854 131.019 326.123 134.432C323.392 137.931 319.894 140.747 315.627 142.88C311.36 145.013 306.582 146.507 301.291 147.36C296.086 148.299 290.923 148.768 285.803 148.768C282.39 148.768 278.848 148.512 275.179 148C271.51 147.488 267.926 146.72 264.427 145.696C260.928 144.672 257.558 143.435 254.315 141.984C251.072 140.533 248.128 138.869 245.483 136.992L250.603 117.792ZM286.571 30.88C283.072 30.88 279.915 31.5627 277.099 32.928C274.283 34.2933 271.851 36.2133 269.803 38.688C267.755 41.0773 266.176 43.9787 265.067 47.392C263.958 50.72 263.403 54.3893 263.403 58.4C263.403 62.3253 263.83 65.9947 264.683 69.408C265.536 72.736 266.902 75.6373 268.779 78.112C270.742 80.5013 273.216 82.3787 276.203 83.744C279.275 85.1093 282.987 85.792 287.339 85.792C291.35 85.792 294.72 84.9813 297.451 83.36C300.182 81.6533 302.358 79.4347 303.979 76.704C305.686 73.9733 306.88 70.8587 307.563 67.36C308.331 63.8613 308.715 60.2773 308.715 56.608C308.715 52.8533 308.246 49.3973 307.307 46.24C306.368 43.0827 304.96 40.3947 303.083 38.176C301.206 35.872 298.859 34.08 296.043 32.8C293.312 31.52 290.155 30.88 286.571 30.88ZM334.858 114.72C339.039 114.72 341.727 113.653 342.922 111.52C344.202 109.301 344.885 105.888 344.97 101.28V47.264C344.97 44.6187 344.927 42.272 344.842 40.224C344.842 38.176 344.586 36.4693 344.074 35.104C343.647 33.6533 342.879 32.544 341.77 31.776C340.661 31.008 339.039 30.5387 336.906 30.368V29.088C338.698 28.9173 340.661 28.6613 342.794 28.32C345.013 27.9787 347.189 27.552 349.322 27.04C351.541 26.528 353.717 25.9733 355.85 25.376C357.983 24.6933 359.903 23.968 361.61 23.2V58.656C362.122 54.4747 363.231 50.5067 364.938 46.752C366.73 42.9973 369.162 39.7547 372.234 37.024C375.391 34.2933 379.189 32.2027 383.626 30.752C388.149 29.3013 393.439 28.7467 399.498 29.088L399.242 45.728C397.279 45.3013 395.317 45.0027 393.354 44.832C391.391 44.576 389.471 44.448 387.594 44.448C383.839 44.448 380.383 44.9173 377.226 45.856C374.069 46.7947 371.338 48.2027 369.034 50.08C366.73 51.9573 364.895 54.3467 363.53 57.248C362.25 60.1493 361.61 63.5627 361.61 67.488V102.048C361.695 106.4 362.378 109.6 363.658 111.648C365.023 113.696 367.711 114.72 371.722 114.72V116C367.455 115.829 363.999 115.701 361.354 115.616C358.709 115.445 356.234 115.36 353.93 115.36C351.455 115.36 348.895 115.445 346.25 115.616C343.605 115.701 340.063 115.829 335.626 116H334.858V114.72ZM405.358 114.72C409.539 114.72 412.227 113.653 413.422 111.52C414.702 109.301 415.385 105.888 415.47 101.28V53.152C415.47 50.5067 415.427 48.16 415.342 46.112C415.342 44.064 415.086 42.3573 414.574 40.992C414.147 39.5413 413.379 38.432 412.27 37.664C411.161 36.896 409.539 36.4267 407.406 36.256V34.976C409.198 34.8053 411.161 34.5493 413.294 34.208C415.513 33.8667 417.689 33.44 419.822 32.928C422.041 32.416 424.217 31.8613 426.35 31.264C428.483 30.5813 430.403 29.856 432.11 29.088V102.048C432.195 106.4 432.878 109.6 434.158 111.648C435.523 113.696 438.211 114.72 442.222 114.72V116C439.662 115.829 436.633 115.701 433.134 115.616C429.635 115.531 425.923 115.488 421.998 115.488C419.267 115.488 416.494 115.531 413.678 115.616C410.862 115.701 408.089 115.829 405.358 116V114.72ZM413.934 13.6C413.934 10.784 414.787 8.39466 416.494 6.43199C418.201 4.46932 420.419 3.48799 423.15 3.48799C426.051 3.48799 428.313 4.51199 429.934 6.56C431.641 8.52266 432.494 10.8693 432.494 13.6C432.494 16.2453 431.598 18.5493 429.806 20.512C428.099 22.4747 425.881 23.456 423.15 23.456C420.505 23.456 418.286 22.6027 416.494 20.896C414.787 19.104 413.934 16.672 413.934 13.6ZM451.483 90.784C451.483 86.7733 452.336 83.3173 454.043 80.416C455.75 77.4293 458.054 74.912 460.955 72.864C463.856 70.816 467.227 69.1947 471.067 68C474.907 66.72 478.96 65.696 483.227 64.928C479.302 64.16 476.059 62.752 473.499 60.704C471.024 58.656 469.275 56.3093 468.251 53.664C467.227 50.9333 466.886 48.16 467.227 45.344C467.654 42.4427 468.763 39.7973 470.555 37.408C472.347 34.9333 474.779 32.928 477.851 31.392C481.008 29.856 484.806 29.088 489.243 29.088C494.534 29.088 499.483 29.6 504.091 30.624C508.784 31.5627 512.923 33.1413 516.507 35.36C520.091 37.5787 522.992 40.5227 525.211 44.192C527.515 47.776 528.88 52.2133 529.307 57.504C529.478 58.9547 529.563 60.448 529.563 61.984C529.563 63.4347 529.563 64.928 529.563 66.464V90.656C529.563 93.728 529.563 96.7147 529.563 99.616C529.648 102.432 529.947 104.949 530.459 107.168C530.971 109.387 531.824 111.179 533.019 112.544C534.214 113.909 536.006 114.592 538.395 114.592V116C533.958 116 530.16 115.659 527.003 114.976C523.846 114.293 521.243 113.184 519.195 111.648C517.147 110.027 515.611 107.851 514.587 105.12C513.648 102.389 513.179 98.976 513.179 94.88C510.79 101.621 507.035 106.827 501.915 110.496C496.795 114.165 490.31 116.043 482.459 116.128C472.304 116.299 464.582 114.08 459.291 109.472C454.086 104.864 451.483 98.6347 451.483 90.784ZM467.995 91.936C467.995 98.4213 469.446 103.541 472.347 107.296C475.248 110.965 479.942 112.8 486.427 112.8C490.096 112.8 493.552 112.245 496.795 111.136C500.123 109.941 502.982 108.064 505.371 105.504C507.76 102.944 509.638 99.616 511.003 95.52C512.454 91.424 513.179 86.3893 513.179 80.416V64.544C510.534 64.544 507.59 64.5867 504.347 64.672C501.104 64.672 497.776 64.928 494.363 65.44C491.035 65.952 487.792 66.7627 484.635 67.872C481.478 68.9813 478.662 70.56 476.187 72.608C473.712 74.656 471.707 77.2587 470.171 80.416C468.72 83.5733 467.995 87.4133 467.995 91.936ZM468.507 48.16C468.592 50.0373 469.062 52 469.915 54.048C471.707 57.7173 474.31 60.32 477.723 61.856C481.222 63.392 484.934 64.16 488.859 64.16C492.443 63.7333 495.942 63.4773 499.355 63.392C502.768 63.2213 506.096 63.136 509.339 63.136H513.179C513.094 58.4427 512.624 54.1333 511.771 50.208C511.003 46.1973 509.68 42.784 507.803 39.968C505.926 37.0667 503.451 34.8053 500.379 33.184C497.392 31.4773 493.595 30.5813 488.987 30.496C486.342 30.496 483.782 30.88 481.307 31.648C478.832 32.3307 476.656 33.44 474.779 34.976C472.902 36.4267 471.366 38.2613 470.171 40.48C469.062 42.6987 468.507 45.2587 468.507 48.16Z" fill="#ECECEC"/>
            </svg>
          </div>
      </section>
      <div className={styles.butterfly}>
        <Image src={"/buttfly-1.svg"} width={390} height={419} alt="butterfly vector"/>
      </div>
      </main>
    </div>
  );
}
