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
            <svg width="646" height="117" viewBox="0 0 646 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.584 116C27.1467 116.085 23.008 115.659 19.168 114.72C15.4133 113.696 12.1707 112.16 9.44 110.112C6.70933 108.064 4.53333 105.461 2.912 102.304C1.376 99.0613 0.608 95.2213 0.608 90.784C0.608 86.432 1.54667 82.7627 3.424 79.776C5.38667 76.7893 7.86133 74.3147 10.848 72.352C13.92 70.304 17.3333 68.7253 21.088 67.616C24.8427 66.4213 28.5547 65.5253 32.224 64.928H32.352C28.4267 64.16 25.2267 62.752 22.752 60.704C20.2773 58.656 18.4853 56.3093 17.376 53.664C16.352 50.9333 16.0107 48.1173 16.352 45.216C16.7787 42.3147 17.8453 39.6693 19.552 37.28C21.344 34.8907 23.8187 32.928 26.976 31.392C30.1333 29.7707 33.9307 28.96 38.368 28.96C43.488 28.96 48.352 29.4293 52.96 30.368C57.568 31.3067 61.6213 32.8427 65.12 34.976C68.704 37.024 71.648 39.7973 73.952 43.296C76.256 46.7093 77.7067 50.8907 78.304 55.84C75.5733 56.7787 72.8427 57.5893 70.112 58.272C67.4667 58.8693 64.8213 59.424 62.176 59.936C61.92 55.6693 61.3227 51.744 60.384 48.16C59.5307 44.576 58.1653 41.504 56.288 38.944C54.4107 36.2987 51.9787 34.2507 48.992 32.8C46.0907 31.264 42.464 30.4533 38.112 30.368C32.992 30.4533 28.768 31.6053 25.44 33.824C22.1973 35.9573 19.9787 38.6453 18.784 41.888C17.9307 44.1067 17.5467 46.368 17.632 48.672C17.8027 50.8907 18.4427 52.9813 19.552 54.944C20.6613 56.8213 22.1973 58.528 24.16 60.064C26.208 61.5147 28.6827 62.5813 31.584 63.264C33.888 63.9467 36.448 64.416 39.264 64.672C42.1653 64.928 45.2373 64.9707 48.48 64.8C52.832 64.6293 57.568 64.0747 62.688 63.136C67.8933 62.1973 73.184 60.832 78.56 59.04C83.5093 57.4187 88.3733 55.456 93.152 53.152C97.9307 50.848 102.368 48.16 106.464 45.088C110.56 42.016 114.229 38.4747 117.472 34.464C120.715 30.368 123.317 25.76 125.28 20.64V58.784C125.877 54.6027 127.029 50.6347 128.736 46.88C130.528 43.1253 132.96 39.8827 136.032 37.152C139.189 34.4213 142.987 32.3307 147.424 30.88C151.947 29.344 157.237 28.7467 163.296 29.088L162.912 45.856C158.987 45.0027 155.104 44.576 151.264 44.576C147.509 44.576 144.053 45.0453 140.896 45.984C137.739 46.9227 135.008 48.3307 132.704 50.208C130.4 52.0853 128.565 54.4747 127.2 57.376C125.92 60.192 125.28 63.5627 125.28 67.488V101.92C125.365 104.139 125.493 106.059 125.664 107.68C125.92 109.216 126.347 110.496 126.944 111.52C127.627 112.544 128.565 113.312 129.76 113.824C131.04 114.336 132.704 114.592 134.752 114.592V115.872C132.192 115.701 129.248 115.573 125.92 115.488C122.677 115.403 119.179 115.36 115.424 115.36C112.864 115.36 110.176 115.403 107.36 115.488C104.629 115.573 101.899 115.701 99.168 115.872V114.592C101.301 114.592 102.965 114.336 104.16 113.824C105.44 113.227 106.379 112.416 106.976 111.392C107.659 110.283 108.085 108.917 108.256 107.296C108.512 105.589 108.64 103.584 108.64 101.28V67.104C108.64 64.4587 108.597 62.1547 108.512 60.192C108.512 58.144 108.256 56.4373 107.744 55.072C107.317 53.7067 106.592 52.64 105.568 51.872C104.544 51.0187 103.051 50.5067 101.088 50.336C97.5893 52.4693 93.9627 54.3893 90.208 56.096C86.4533 57.7173 82.5707 59.168 78.56 60.448C78.56 61.1307 78.56 61.8133 78.56 62.496C78.6453 63.1787 78.688 64.4587 78.688 66.336C78.688 68.2133 78.688 71.0293 78.688 74.784C78.688 78.5387 78.688 83.7867 78.688 90.528C78.688 93.6 78.688 96.5867 78.688 99.488C78.7733 102.389 79.072 104.949 79.584 107.168C80.096 109.387 80.9493 111.179 82.144 112.544C83.3387 113.909 85.1307 114.592 87.52 114.592V115.872C83.0827 115.872 79.2853 115.531 76.128 114.848C72.9707 114.165 70.368 113.056 68.32 111.52C66.272 109.899 64.736 107.765 63.712 105.12C62.7733 102.389 62.304 98.976 62.304 94.88C59.9147 101.536 56.16 106.699 51.04 110.368C45.92 114.037 39.4347 115.915 31.584 116ZM17.12 91.808C17.12 98.3787 18.5707 103.499 21.472 107.168C24.3733 110.837 29.0667 112.672 35.552 112.672C39.2213 112.672 42.6773 112.117 45.92 111.008C49.248 109.813 52.1067 107.936 54.496 105.376C56.8853 102.816 58.7627 99.488 60.128 95.392C61.5787 91.296 62.304 86.304 62.304 80.416V64.544C60.6827 64.8853 59.104 65.1413 57.568 65.312C56.032 65.4827 54.496 65.6533 52.96 65.824C50.656 65.9947 48.3947 66.1227 46.176 66.208C43.9573 66.2933 41.824 66.2507 39.776 66.08C36.7893 66.7627 33.9307 67.7013 31.2 68.896C28.4693 70.0907 26.0373 71.712 23.904 73.76C21.856 75.7227 20.192 78.1973 18.912 81.184C17.7173 84.1707 17.12 87.712 17.12 91.808ZM169.233 90.784C169.233 86.7733 170.086 83.3173 171.793 80.416C173.5 77.4293 175.804 74.912 178.705 72.864C181.606 70.816 184.977 69.152 188.817 67.872C192.657 66.592 196.71 65.6107 200.977 64.928C197.052 64.16 193.809 62.752 191.249 60.704C188.774 58.5707 187.025 56.1813 186.001 53.536C184.977 50.8907 184.636 48.1173 184.977 45.216C185.404 42.3147 186.513 39.6693 188.305 37.28C190.097 34.8907 192.529 32.928 195.601 31.392C198.758 29.7707 202.556 28.96 206.993 28.96C212.284 28.96 217.233 29.472 221.841 30.496C226.534 31.4347 230.673 33.0133 234.257 35.232C237.841 37.4507 240.742 40.3947 242.961 44.064C245.265 47.648 246.63 52.0853 247.057 57.376C247.142 57.888 247.185 58.4427 247.185 59.04C247.185 59.552 247.228 60.1067 247.313 60.704C244.326 60.2773 241.425 60.0213 238.609 59.936C235.878 59.8507 233.276 59.808 230.801 59.808C230.545 55.5413 229.948 51.6587 229.009 48.16C228.156 44.576 226.79 41.504 224.913 38.944C223.036 36.2987 220.604 34.2507 217.617 32.8C214.63 31.264 211.004 30.4533 206.737 30.368C201.617 30.368 197.393 31.4773 194.065 33.696C190.822 35.9147 188.604 38.6453 187.409 41.888C186.385 44.448 186.044 47.0507 186.385 49.696C186.726 52.3413 187.708 54.7307 189.329 56.864C191.036 58.912 193.34 60.6187 196.241 61.984C199.142 63.3493 202.598 64.0747 206.609 64.16C210.108 63.7333 213.521 63.4773 216.849 63.392C220.262 63.2213 223.59 63.0933 226.833 63.008H227.601C236.134 63.008 244.668 63.7333 253.201 65.184C261.734 66.5493 269.798 69.3227 277.393 73.504V18.976C277.308 17.2693 277.137 15.776 276.881 14.496C276.71 13.1307 276.326 12.0213 275.729 11.168C275.132 10.2293 274.321 9.504 273.297 8.992C272.273 8.47999 270.95 8.13866 269.329 7.96799V6.688C271.121 6.51733 273.084 6.26133 275.217 5.92C277.436 5.57866 279.612 5.152 281.745 4.63999C283.964 4.12799 286.097 3.57333 288.145 2.976C290.278 2.29333 292.241 1.568 294.033 0.799995V60.064C294.801 55.1147 296.209 50.72 298.257 46.88C300.305 43.04 302.737 39.7973 305.553 37.152C308.454 34.5067 311.697 32.5013 315.281 31.136C318.865 29.6853 322.577 28.96 326.417 28.96C332.646 28.96 338.108 30.0267 342.801 32.16C347.494 34.208 351.42 37.152 354.577 40.992C357.734 44.832 360.124 49.4827 361.745 54.944C363.366 60.32 364.177 66.336 364.177 72.992C364.177 79.7333 363.238 85.792 361.361 91.168C359.484 96.4587 356.838 100.939 353.425 104.608C350.097 108.277 346.129 111.093 341.521 113.056C336.913 114.933 331.921 115.872 326.545 115.872C323.217 115.957 320.017 115.488 316.945 114.464C313.873 113.355 311.014 111.861 308.369 109.984C305.809 108.107 303.505 105.888 301.457 103.328C299.409 100.768 297.745 97.952 296.465 94.88C294.332 90.272 291.43 86.2613 287.761 82.848C284.177 79.4347 280.166 76.576 275.729 74.272C271.377 71.8827 266.726 70.0053 261.777 68.64C256.913 67.2747 252.092 66.2507 247.313 65.568V90.528C247.313 93.6 247.313 96.5867 247.313 99.488C247.398 102.304 247.697 104.864 248.209 107.168C248.721 109.387 249.574 111.179 250.769 112.544C251.964 113.909 253.756 114.592 256.145 114.592V115.872C251.708 115.872 247.91 115.531 244.753 114.848C241.596 114.165 238.993 113.056 236.945 111.52C234.897 109.899 233.361 107.765 232.337 105.12C231.398 102.389 230.929 98.976 230.929 94.88C228.54 101.536 224.785 106.699 219.665 110.368C214.545 114.037 208.06 115.915 200.209 116C195.174 116.085 190.694 115.573 186.769 114.464C182.929 113.269 179.686 111.563 177.041 109.344C174.481 107.125 172.518 104.48 171.153 101.408C169.873 98.2507 169.233 94.7093 169.233 90.784ZM294.033 72.48C294.033 75.9787 294.204 79.4773 294.545 82.976C294.886 86.4747 295.782 89.8453 297.233 93.088C297.404 93.6853 297.66 94.2827 298.001 94.88L298.257 95.52C299.537 98.2507 301.158 100.811 303.121 103.2C305.084 105.504 307.26 107.509 309.649 109.216C312.124 110.923 314.769 112.245 317.585 113.184C320.486 114.123 323.473 114.549 326.545 114.464C330.47 114.464 333.798 113.397 336.529 111.264C339.26 109.131 341.436 106.229 343.057 102.56C344.764 98.8053 345.958 94.4107 346.641 89.376C347.409 84.256 347.793 78.7947 347.793 72.992C347.793 68.384 347.537 63.5627 347.025 58.528C346.598 53.4933 345.617 48.8853 344.081 44.704C342.545 40.5227 340.369 37.1093 337.553 34.464C334.737 31.7333 331.025 30.368 326.417 30.368C323.174 30.368 320.017 30.88 316.945 31.904C313.958 32.928 311.142 34.464 308.497 36.512C305.852 38.56 303.505 41.0773 301.457 44.064C299.409 47.0507 297.83 50.464 296.721 54.304C296.209 55.6693 295.782 57.1627 295.441 58.784C295.1 60.4053 294.844 62.0267 294.673 63.648C294.502 65.2693 294.332 66.848 294.161 68.384C294.076 69.92 294.033 71.2853 294.033 72.48ZM185.745 91.808C185.745 98.3787 187.196 103.499 190.097 107.168C192.998 110.837 197.692 112.672 204.177 112.672C207.846 112.672 211.302 112.117 214.545 111.008C217.873 109.813 220.732 107.936 223.121 105.376C225.51 102.816 227.388 99.488 228.753 95.392C230.204 91.296 230.929 86.304 230.929 80.416V64.544C230.758 64.4587 230.545 64.416 230.289 64.416H229.777C227.132 64.3307 224.188 64.3733 220.945 64.544C217.702 64.6293 214.46 64.9707 211.217 65.568C207.974 66.08 204.817 66.8907 201.745 68C198.673 69.1093 195.942 70.688 193.553 72.736C191.164 74.784 189.244 77.3867 187.793 80.544C186.428 83.616 185.745 87.3707 185.745 91.808ZM268.689 114.592C270.481 114.592 271.932 114.208 273.041 113.44C274.236 112.587 275.132 111.477 275.729 110.112C276.326 108.661 276.753 106.997 277.009 105.12C277.265 103.243 277.393 101.195 277.393 98.976V79.264C280.806 81.312 283.921 83.7013 286.737 86.432C289.553 89.1627 291.985 92.4053 294.033 96.16V115.872H268.689V114.592ZM226.833 64.544L229.777 64.416C229.265 64.416 228.753 64.416 228.241 64.416C227.729 64.416 227.26 64.4587 226.833 64.544ZM416.366 116.128C409.283 116.128 403.097 114.891 397.806 112.416C392.515 109.941 388.035 106.656 384.366 102.56C380.782 98.464 378.051 93.8133 376.174 88.608C374.382 83.4027 373.443 78.0693 373.358 72.608C373.358 67.1467 374.211 61.8133 375.918 56.608C377.71 51.4027 380.398 46.752 383.982 42.656C387.651 38.56 392.174 35.2747 397.55 32.8C403.011 30.3253 409.411 29.088 416.75 29.088C421.699 29.088 426.265 29.728 430.446 31.008C434.713 32.288 438.553 34.08 441.966 36.384C445.379 38.688 448.323 41.4613 450.798 44.704C453.273 47.8613 455.278 51.36 456.814 55.2C455.79 55.3707 454.211 55.6693 452.078 56.096C449.945 56.4373 447.427 56.864 444.526 57.376C441.71 57.888 438.553 58.4427 435.054 59.04C431.555 59.6373 427.929 60.2773 424.174 60.96C429.806 61.0453 434.627 61.8987 438.638 63.52C442.734 65.056 446.062 67.0613 448.622 69.536C451.267 71.9253 453.145 74.6987 454.254 77.856C455.449 80.928 455.918 84.0853 455.662 87.328C455.491 90.4853 454.638 93.6427 453.102 96.8C451.651 99.872 449.561 102.603 446.83 104.992C442.99 108.405 438.553 111.136 433.518 113.184C428.483 115.147 422.766 116.128 416.366 116.128ZM390.51 66.976C390.169 72.1813 390.339 77.6 391.022 83.232C391.705 88.7787 393.07 93.8987 395.118 98.592C397.166 103.2 399.939 107.04 403.438 110.112C406.937 113.099 411.374 114.635 416.75 114.72C422.894 114.635 428.355 113.653 433.134 111.776C437.998 109.813 442.265 107.211 445.934 103.968C450.115 100.213 452.761 95.8187 453.87 90.784C454.979 85.7493 454.425 80.9707 452.206 76.448C450.841 73.7173 449.134 71.456 447.086 69.664C445.038 67.872 442.734 66.464 440.174 65.44C437.699 64.3307 435.011 63.5627 432.11 63.136C429.209 62.7093 426.265 62.496 423.278 62.496C420.206 62.496 417.134 62.6667 414.062 63.008C411.075 63.3493 408.131 63.776 405.23 64.288C402.414 64.7147 399.726 65.184 397.166 65.696C394.691 66.208 392.473 66.6347 390.51 66.976ZM390.51 65.568C393.497 65.056 396.654 64.5013 399.982 63.904C403.395 63.3067 406.894 62.6667 410.478 61.984C416.025 61.0453 421.486 60.1067 426.862 59.168C432.323 58.144 437.273 57.248 441.71 56.48C441.027 53.152 440.046 49.952 438.766 46.88C437.571 43.7227 435.95 40.9493 433.902 38.56C431.939 36.0853 429.507 34.1227 426.606 32.672C423.79 31.2213 420.462 30.496 416.622 30.496C411.843 30.496 407.833 31.6053 404.59 33.824C401.433 35.9573 398.83 38.7307 396.782 42.144C394.819 45.5573 393.326 49.3547 392.302 53.536C391.363 57.632 390.766 61.6427 390.51 65.568ZM484.415 115.488C481.343 115.488 478.271 115.531 475.199 115.616C472.127 115.701 469.055 115.829 465.983 116V114.72C470.164 114.72 472.852 113.653 474.047 111.52C475.327 109.301 476.01 105.888 476.095 101.28V24.992C476.095 22.3467 476.052 20 475.967 17.952C475.967 15.904 475.711 14.1973 475.199 12.832C474.772 11.3813 474.004 10.272 472.895 9.504C471.786 8.736 470.164 8.26666 468.031 8.09599V6.81599C469.823 6.64533 471.786 6.38933 473.919 6.048C476.138 5.70666 478.314 5.28 480.447 4.768C482.666 4.25599 484.842 3.70133 486.975 3.104C489.108 2.42133 491.028 1.69599 492.735 0.927994V102.048C492.82 106.4 493.503 109.6 494.783 111.648C496.148 113.696 498.836 114.72 502.847 114.72V116C499.775 115.829 496.703 115.701 493.631 115.616C490.559 115.531 487.487 115.488 484.415 115.488ZM530.54 115.488C527.468 115.488 524.396 115.531 521.324 115.616C518.252 115.701 515.18 115.829 512.108 116V114.72C516.289 114.72 518.977 113.653 520.172 111.52C521.452 109.301 522.135 105.888 522.22 101.28V24.992C522.22 22.3467 522.177 20 522.092 17.952C522.092 15.904 521.836 14.1973 521.324 12.832C520.897 11.3813 520.129 10.272 519.02 9.504C517.911 8.736 516.289 8.26666 514.156 8.09599V6.81599C515.948 6.64533 517.911 6.38933 520.044 6.048C522.263 5.70666 524.439 5.28 526.572 4.768C528.791 4.25599 530.967 3.70133 533.1 3.104C535.233 2.42133 537.153 1.69599 538.86 0.927994V102.048C538.945 106.4 539.628 109.6 540.908 111.648C542.273 113.696 544.961 114.72 548.972 114.72V116C545.9 115.829 542.828 115.701 539.756 115.616C536.684 115.531 533.612 115.488 530.54 115.488ZM558.233 90.784C558.233 86.7733 559.086 83.3173 560.793 80.416C562.5 77.4293 564.804 74.912 567.705 72.864C570.606 70.816 573.977 69.1947 577.817 68C581.657 66.72 585.71 65.696 589.977 64.928C586.052 64.16 582.809 62.752 580.249 60.704C577.774 58.656 576.025 56.3093 575.001 53.664C573.977 50.9333 573.636 48.16 573.977 45.344C574.404 42.4427 575.513 39.7973 577.305 37.408C579.097 34.9333 581.529 32.928 584.601 31.392C587.758 29.856 591.556 29.088 595.993 29.088C601.284 29.088 606.233 29.6 610.841 30.624C615.534 31.5627 619.673 33.1413 623.257 35.36C626.841 37.5787 629.742 40.5227 631.961 44.192C634.265 47.776 635.63 52.2133 636.057 57.504C636.228 58.9547 636.313 60.448 636.313 61.984C636.313 63.4347 636.313 64.928 636.313 66.464V90.656C636.313 93.728 636.313 96.7147 636.313 99.616C636.398 102.432 636.697 104.949 637.209 107.168C637.721 109.387 638.574 111.179 639.769 112.544C640.964 113.909 642.756 114.592 645.145 114.592V116C640.708 116 636.91 115.659 633.753 114.976C630.596 114.293 627.993 113.184 625.945 111.648C623.897 110.027 622.361 107.851 621.337 105.12C620.398 102.389 619.929 98.976 619.929 94.88C617.54 101.621 613.785 106.827 608.665 110.496C603.545 114.165 597.06 116.043 589.209 116.128C579.054 116.299 571.332 114.08 566.041 109.472C560.836 104.864 558.233 98.6347 558.233 90.784ZM574.745 91.936C574.745 98.4213 576.196 103.541 579.097 107.296C581.998 110.965 586.692 112.8 593.177 112.8C596.846 112.8 600.302 112.245 603.545 111.136C606.873 109.941 609.732 108.064 612.121 105.504C614.51 102.944 616.388 99.616 617.753 95.52C619.204 91.424 619.929 86.3893 619.929 80.416V64.544C617.284 64.544 614.34 64.5867 611.097 64.672C607.854 64.672 604.526 64.928 601.113 65.44C597.785 65.952 594.542 66.7627 591.385 67.872C588.228 68.9813 585.412 70.56 582.937 72.608C580.462 74.656 578.457 77.2587 576.921 80.416C575.47 83.5733 574.745 87.4133 574.745 91.936ZM575.257 48.16C575.342 50.0373 575.812 52 576.665 54.048C578.457 57.7173 581.06 60.32 584.473 61.856C587.972 63.392 591.684 64.16 595.609 64.16C599.193 63.7333 602.692 63.4773 606.105 63.392C609.518 63.2213 612.846 63.136 616.089 63.136H619.929C619.844 58.4427 619.374 54.1333 618.521 50.208C617.753 46.1973 616.43 42.784 614.553 39.968C612.676 37.0667 610.201 34.8053 607.129 33.184C604.142 31.4773 600.345 30.5813 595.737 30.496C593.092 30.496 590.532 30.88 588.057 31.648C585.582 32.3307 583.406 33.44 581.529 34.976C579.652 36.4267 578.116 38.2613 576.921 40.48C575.812 42.6987 575.257 45.2587 575.257 48.16Z" fill="#ECECEC"/>
            </svg>
          </div>
          <div className={styles.lastName}>
            <svg width="529" height="149" viewBox="0 0 529 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.608 90.784C0.608 86.7733 1.46133 83.3173 3.168 80.416C4.87467 77.4293 7.17867 74.912 10.08 72.864C12.9813 70.816 16.352 69.1947 20.192 68C24.032 66.72 28.0853 65.696 32.352 64.928C28.4267 64.16 25.184 62.752 22.624 60.704C20.1493 58.656 18.4 56.3093 17.376 53.664C16.352 50.9333 16.0107 48.16 16.352 45.344C16.7787 42.4427 17.888 39.7973 19.68 37.408C21.472 34.9333 23.904 32.928 26.976 31.392C30.1333 29.856 33.9307 29.088 38.368 29.088C43.6587 29.088 48.608 29.6 53.216 30.624C57.9093 31.5627 62.048 33.1413 65.632 35.36C69.216 37.5787 72.1173 40.5227 74.336 44.192C76.64 47.776 78.0053 52.2133 78.432 57.504C78.6027 58.9547 78.688 60.448 78.688 61.984C78.688 63.4347 78.688 64.928 78.688 66.464V90.656C78.688 93.728 78.688 96.7147 78.688 99.616C78.7733 102.432 79.072 104.949 79.584 107.168C80.096 109.387 80.9493 111.179 82.144 112.544C83.3387 113.909 85.1307 114.592 87.52 114.592V116C83.0827 116 79.2853 115.659 76.128 114.976C72.9707 114.293 70.368 113.184 68.32 111.648C66.272 110.027 64.736 107.851 63.712 105.12C62.7733 102.389 62.304 98.976 62.304 94.88C59.9147 101.621 56.16 106.827 51.04 110.496C45.92 114.165 39.4347 116.043 31.584 116.128C21.4293 116.299 13.7067 114.08 8.416 109.472C3.21067 104.864 0.608 98.6347 0.608 90.784ZM17.12 91.936C17.12 98.4213 18.5707 103.541 21.472 107.296C24.3733 110.965 29.0667 112.8 35.552 112.8C39.2213 112.8 42.6773 112.245 45.92 111.136C49.248 109.941 52.1067 108.064 54.496 105.504C56.8853 102.944 58.7627 99.616 60.128 95.52C61.5787 91.424 62.304 86.3893 62.304 80.416V64.544C59.6587 64.544 56.7147 64.5867 53.472 64.672C50.2293 64.672 46.9013 64.928 43.488 65.44C40.16 65.952 36.9173 66.7627 33.76 67.872C30.6027 68.9813 27.7867 70.56 25.312 72.608C22.8373 74.656 20.832 77.2587 19.296 80.416C17.8453 83.5733 17.12 87.4133 17.12 91.936ZM17.632 48.16C17.7173 50.0373 18.1867 52 19.04 54.048C20.832 57.7173 23.4347 60.32 26.848 61.856C30.3467 63.392 34.0587 64.16 37.984 64.16C41.568 63.7333 45.0667 63.4773 48.48 63.392C51.8933 63.2213 55.2213 63.136 58.464 63.136H62.304C62.2187 58.4427 61.7493 54.1333 60.896 50.208C60.128 46.1973 58.8053 42.784 56.928 39.968C55.0507 37.0667 52.576 34.8053 49.504 33.184C46.5173 31.4773 42.72 30.5813 38.112 30.496C35.4667 30.496 32.9067 30.88 30.432 31.648C27.9573 32.3307 25.7813 33.44 23.904 34.976C22.0267 36.4267 20.4907 38.2613 19.296 40.48C18.1867 42.6987 17.632 45.2587 17.632 48.16ZM115.165 115.488C112.093 115.488 109.021 115.531 105.949 115.616C102.877 115.701 99.805 115.829 96.733 116V114.72C100.914 114.72 103.602 113.653 104.797 111.52C106.077 109.301 106.76 105.888 106.845 101.28V24.992C106.845 22.3467 106.802 20 106.717 17.952C106.717 15.904 106.461 14.1973 105.949 12.832C105.522 11.3813 104.754 10.272 103.645 9.504C102.536 8.736 100.914 8.26666 98.781 8.09599V6.81599C100.573 6.64533 102.536 6.38933 104.669 6.048C106.888 5.70666 109.064 5.28 111.197 4.768C113.416 4.25599 115.592 3.70133 117.725 3.104C119.858 2.42133 121.778 1.69599 123.485 0.927994V102.048C123.57 106.4 124.253 109.6 125.533 111.648C126.898 113.696 129.586 114.72 133.597 114.72V116C130.525 115.829 127.453 115.701 124.381 115.616C121.309 115.531 118.237 115.488 115.165 115.488ZM185.866 116.128C178.783 116.128 172.597 114.891 167.306 112.416C162.015 109.941 157.535 106.656 153.866 102.56C150.282 98.464 147.551 93.8133 145.674 88.608C143.882 83.4027 142.943 78.0693 142.858 72.608C142.858 67.1467 143.711 61.8133 145.418 56.608C147.21 51.4027 149.898 46.752 153.482 42.656C157.151 38.56 161.674 35.2747 167.05 32.8C172.511 30.3253 178.911 29.088 186.25 29.088C191.199 29.088 195.765 29.728 199.946 31.008C204.213 32.288 208.053 34.08 211.466 36.384C214.879 38.688 217.823 41.4613 220.298 44.704C222.773 47.8613 224.778 51.36 226.314 55.2C225.29 55.3707 223.711 55.6693 221.578 56.096C219.445 56.4373 216.927 56.864 214.026 57.376C211.21 57.888 208.053 58.4427 204.554 59.04C201.055 59.6373 197.429 60.2773 193.674 60.96C199.306 61.0453 204.127 61.8987 208.138 63.52C212.234 65.056 215.562 67.0613 218.122 69.536C220.767 71.9253 222.645 74.6987 223.754 77.856C224.949 80.928 225.418 84.0853 225.162 87.328C224.991 90.4853 224.138 93.6427 222.602 96.8C221.151 99.872 219.061 102.603 216.33 104.992C212.49 108.405 208.053 111.136 203.018 113.184C197.983 115.147 192.266 116.128 185.866 116.128ZM160.01 66.976C159.669 72.1813 159.839 77.6 160.522 83.232C161.205 88.7787 162.57 93.8987 164.618 98.592C166.666 103.2 169.439 107.04 172.938 110.112C176.437 113.099 180.874 114.635 186.25 114.72C192.394 114.635 197.855 113.653 202.634 111.776C207.498 109.813 211.765 107.211 215.434 103.968C219.615 100.213 222.261 95.8187 223.37 90.784C224.479 85.7493 223.925 80.9707 221.706 76.448C220.341 73.7173 218.634 71.456 216.586 69.664C214.538 67.872 212.234 66.464 209.674 65.44C207.199 64.3307 204.511 63.5627 201.61 63.136C198.709 62.7093 195.765 62.496 192.778 62.496C189.706 62.496 186.634 62.6667 183.562 63.008C180.575 63.3493 177.631 63.776 174.73 64.288C171.914 64.7147 169.226 65.184 166.666 65.696C164.191 66.208 161.973 66.6347 160.01 66.976ZM160.01 65.568C162.997 65.056 166.154 64.5013 169.482 63.904C172.895 63.3067 176.394 62.6667 179.978 61.984C185.525 61.0453 190.986 60.1067 196.362 59.168C201.823 58.144 206.773 57.248 211.21 56.48C210.527 53.152 209.546 49.952 208.266 46.88C207.071 43.7227 205.45 40.9493 203.402 38.56C201.439 36.0853 199.007 34.1227 196.106 32.672C193.29 31.2213 189.962 30.496 186.122 30.496C181.343 30.496 177.333 31.6053 174.09 33.824C170.933 35.9573 168.33 38.7307 166.282 42.144C164.319 45.5573 162.826 49.3547 161.802 53.536C160.863 57.632 160.266 61.6427 160.01 65.568ZM240.603 117.792L241.883 118.048C242.992 122.4 244.528 126.411 246.491 130.08C248.539 133.835 251.014 137.035 253.915 139.68C256.816 142.325 260.144 144.373 263.899 145.824C267.654 147.275 271.878 147.872 276.571 147.616C280.24 147.445 283.952 146.891 287.707 145.952C291.462 145.013 294.79 143.648 297.691 141.856C300.678 140.149 303.11 137.973 304.987 135.328C306.864 132.768 307.803 129.739 307.803 126.24C307.803 123.595 306.95 121.376 305.243 119.584C303.536 117.877 301.275 116.469 298.459 115.36C295.728 114.165 292.614 113.269 289.115 112.672C285.616 111.989 282.032 111.435 278.363 111.008C274.694 110.581 271.11 110.24 267.611 109.984C264.198 109.643 261.168 109.216 258.523 108.704C255.536 108.192 253.19 107.509 251.483 106.656C249.776 105.803 248.496 104.864 247.643 103.84C246.875 102.816 246.406 101.749 246.235 100.64C246.064 99.5307 246.064 98.464 246.235 97.44C246.491 95.7333 247.43 94.2827 249.051 93.088C250.672 91.808 252.635 90.7413 254.939 89.888C257.328 88.9493 259.846 88.224 262.491 87.712C265.222 87.2 267.824 86.8587 270.299 86.688C265.691 86.176 261.424 85.2373 257.499 83.872C253.659 82.4213 250.331 80.544 247.515 78.24C244.784 75.8507 242.651 72.992 241.115 69.664C239.579 66.336 238.811 62.5387 238.811 58.272C238.811 53.152 239.92 48.8 242.139 45.216C244.358 41.5467 247.216 38.5173 250.715 36.128C254.299 33.7387 258.31 31.9893 262.747 30.88C267.184 29.7707 271.622 29.216 276.059 29.216C278.278 29.216 280.582 29.4293 282.971 29.856C285.446 30.2827 287.792 30.752 290.011 31.264C293.424 27.0827 297.179 23.712 301.275 21.152C305.371 18.5067 309.936 17.184 314.971 17.184C316.592 17.184 318.47 17.3973 320.603 17.824L315.483 35.36H314.587C314.16 32.8 312.838 30.6667 310.619 28.96C308.4 27.2533 305.84 26.4 302.939 26.4C301.062 26.4 299.142 26.8267 297.179 27.68C295.302 28.5333 293.51 29.8987 291.803 31.776C294.619 32.7147 297.35 33.9947 299.995 35.616C302.64 37.152 304.944 39.0293 306.907 41.248C308.955 43.3813 310.576 45.8987 311.771 48.8C312.966 51.616 313.563 54.7307 313.563 58.144C313.563 63.52 312.496 68.0427 310.363 71.712C308.23 75.3813 305.328 78.4107 301.659 80.8C297.99 83.104 293.638 84.8533 288.603 86.048C283.654 87.1573 278.363 87.84 272.731 88.096C264.112 88.608 259.803 90.3147 259.803 93.216C259.803 94.8373 261.296 96.032 264.283 96.8C267.27 97.4827 270.982 98.08 275.419 98.592C279.942 99.0187 284.806 99.5733 290.011 100.256C295.216 100.939 300.038 102.048 304.475 103.584C308.998 105.12 312.752 107.339 315.739 110.24C318.726 113.056 320.219 116.896 320.219 121.76C320.219 126.795 318.854 131.019 316.123 134.432C313.392 137.931 309.894 140.747 305.627 142.88C301.36 145.013 296.582 146.507 291.291 147.36C286.086 148.299 280.923 148.768 275.803 148.768C272.39 148.768 268.848 148.512 265.179 148C261.51 147.488 257.926 146.72 254.427 145.696C250.928 144.672 247.558 143.435 244.315 141.984C241.072 140.533 238.128 138.869 235.483 136.992L240.603 117.792ZM276.571 30.88C273.072 30.88 269.915 31.5627 267.099 32.928C264.283 34.2933 261.851 36.2133 259.803 38.688C257.755 41.0773 256.176 43.9787 255.067 47.392C253.958 50.72 253.403 54.3893 253.403 58.4C253.403 62.3253 253.83 65.9947 254.683 69.408C255.536 72.736 256.902 75.6373 258.779 78.112C260.742 80.5013 263.216 82.3787 266.203 83.744C269.275 85.1093 272.987 85.792 277.339 85.792C281.35 85.792 284.72 84.9813 287.451 83.36C290.182 81.6533 292.358 79.4347 293.979 76.704C295.686 73.9733 296.88 70.8587 297.563 67.36C298.331 63.8613 298.715 60.2773 298.715 56.608C298.715 52.8533 298.246 49.3973 297.307 46.24C296.368 43.0827 294.96 40.3947 293.083 38.176C291.206 35.872 288.859 34.08 286.043 32.8C283.312 31.52 280.155 30.88 276.571 30.88ZM324.858 114.72C329.039 114.72 331.727 113.653 332.922 111.52C334.202 109.301 334.885 105.888 334.97 101.28V47.264C334.97 44.6187 334.927 42.272 334.842 40.224C334.842 38.176 334.586 36.4693 334.074 35.104C333.647 33.6533 332.879 32.544 331.77 31.776C330.661 31.008 329.039 30.5387 326.906 30.368V29.088C328.698 28.9173 330.661 28.6613 332.794 28.32C335.013 27.9787 337.189 27.552 339.322 27.04C341.541 26.528 343.717 25.9733 345.85 25.376C347.983 24.6933 349.903 23.968 351.61 23.2V58.656C352.122 54.4747 353.231 50.5067 354.938 46.752C356.73 42.9973 359.162 39.7547 362.234 37.024C365.391 34.2933 369.189 32.2027 373.626 30.752C378.149 29.3013 383.439 28.7467 389.498 29.088L389.242 45.728C387.279 45.3013 385.317 45.0027 383.354 44.832C381.391 44.576 379.471 44.448 377.594 44.448C373.839 44.448 370.383 44.9173 367.226 45.856C364.069 46.7947 361.338 48.2027 359.034 50.08C356.73 51.9573 354.895 54.3467 353.53 57.248C352.25 60.1493 351.61 63.5627 351.61 67.488V102.048C351.695 106.4 352.378 109.6 353.658 111.648C355.023 113.696 357.711 114.72 361.722 114.72V116C357.455 115.829 353.999 115.701 351.354 115.616C348.709 115.445 346.234 115.36 343.93 115.36C341.455 115.36 338.895 115.445 336.25 115.616C333.605 115.701 330.063 115.829 325.626 116H324.858V114.72ZM395.358 114.72C399.539 114.72 402.227 113.653 403.422 111.52C404.702 109.301 405.385 105.888 405.47 101.28V53.152C405.47 50.5067 405.427 48.16 405.342 46.112C405.342 44.064 405.086 42.3573 404.574 40.992C404.147 39.5413 403.379 38.432 402.27 37.664C401.161 36.896 399.539 36.4267 397.406 36.256V34.976C399.198 34.8053 401.161 34.5493 403.294 34.208C405.513 33.8667 407.689 33.44 409.822 32.928C412.041 32.416 414.217 31.8613 416.35 31.264C418.483 30.5813 420.403 29.856 422.11 29.088V102.048C422.195 106.4 422.878 109.6 424.158 111.648C425.523 113.696 428.211 114.72 432.222 114.72V116C429.662 115.829 426.633 115.701 423.134 115.616C419.635 115.531 415.923 115.488 411.998 115.488C409.267 115.488 406.494 115.531 403.678 115.616C400.862 115.701 398.089 115.829 395.358 116V114.72ZM403.934 13.6C403.934 10.784 404.787 8.39466 406.494 6.43199C408.201 4.46932 410.419 3.48799 413.15 3.48799C416.051 3.48799 418.313 4.51199 419.934 6.56C421.641 8.52266 422.494 10.8693 422.494 13.6C422.494 16.2453 421.598 18.5493 419.806 20.512C418.099 22.4747 415.881 23.456 413.15 23.456C410.505 23.456 408.286 22.6027 406.494 20.896C404.787 19.104 403.934 16.672 403.934 13.6ZM441.483 90.784C441.483 86.7733 442.336 83.3173 444.043 80.416C445.75 77.4293 448.054 74.912 450.955 72.864C453.856 70.816 457.227 69.1947 461.067 68C464.907 66.72 468.96 65.696 473.227 64.928C469.302 64.16 466.059 62.752 463.499 60.704C461.024 58.656 459.275 56.3093 458.251 53.664C457.227 50.9333 456.886 48.16 457.227 45.344C457.654 42.4427 458.763 39.7973 460.555 37.408C462.347 34.9333 464.779 32.928 467.851 31.392C471.008 29.856 474.806 29.088 479.243 29.088C484.534 29.088 489.483 29.6 494.091 30.624C498.784 31.5627 502.923 33.1413 506.507 35.36C510.091 37.5787 512.992 40.5227 515.211 44.192C517.515 47.776 518.88 52.2133 519.307 57.504C519.478 58.9547 519.563 60.448 519.563 61.984C519.563 63.4347 519.563 64.928 519.563 66.464V90.656C519.563 93.728 519.563 96.7147 519.563 99.616C519.648 102.432 519.947 104.949 520.459 107.168C520.971 109.387 521.824 111.179 523.019 112.544C524.214 113.909 526.006 114.592 528.395 114.592V116C523.958 116 520.16 115.659 517.003 114.976C513.846 114.293 511.243 113.184 509.195 111.648C507.147 110.027 505.611 107.851 504.587 105.12C503.648 102.389 503.179 98.976 503.179 94.88C500.79 101.621 497.035 106.827 491.915 110.496C486.795 114.165 480.31 116.043 472.459 116.128C462.304 116.299 454.582 114.08 449.291 109.472C444.086 104.864 441.483 98.6347 441.483 90.784ZM457.995 91.936C457.995 98.4213 459.446 103.541 462.347 107.296C465.248 110.965 469.942 112.8 476.427 112.8C480.096 112.8 483.552 112.245 486.795 111.136C490.123 109.941 492.982 108.064 495.371 105.504C497.76 102.944 499.638 99.616 501.003 95.52C502.454 91.424 503.179 86.3893 503.179 80.416V64.544C500.534 64.544 497.59 64.5867 494.347 64.672C491.104 64.672 487.776 64.928 484.363 65.44C481.035 65.952 477.792 66.7627 474.635 67.872C471.478 68.9813 468.662 70.56 466.187 72.608C463.712 74.656 461.707 77.2587 460.171 80.416C458.72 83.5733 457.995 87.4133 457.995 91.936ZM458.507 48.16C458.592 50.0373 459.062 52 459.915 54.048C461.707 57.7173 464.31 60.32 467.723 61.856C471.222 63.392 474.934 64.16 478.859 64.16C482.443 63.7333 485.942 63.4773 489.355 63.392C492.768 63.2213 496.096 63.136 499.339 63.136H503.179C503.094 58.4427 502.624 54.1333 501.771 50.208C501.003 46.1973 499.68 42.784 497.803 39.968C495.926 37.0667 493.451 34.8053 490.379 33.184C487.392 31.4773 483.595 30.5813 478.987 30.496C476.342 30.496 473.782 30.88 471.307 31.648C468.832 32.3307 466.656 33.44 464.779 34.976C462.902 36.4267 461.366 38.2613 460.171 40.48C459.062 42.6987 458.507 45.2587 458.507 48.16Z" fill="#ECECEC"/>
            </svg>
          </div>
          <div className={styles.information}>
            <ul>
              <li>Portfolio 2024</li>
              <li>&#91; Designer &#93;</li>
              <li>Vancouver, BC</li>
            </ul>
          </div>
      </section>
      <div className={styles.butterfly}>
       {/*} <Image 
          src={"/buttfly-1.svg"} 
          width={390} height={419} 
          alt="butterfly vector"
        /> */}
      </div>
      <section className={styles.recentProjects}>
        <h2>Recent Projects</h2>
        <div className={styles.cardContainer}>
          <div className={styles.recentCard}>
            <div className={styles.projText}>
              <div className={styles.projectType}>
                <div className={styles.circle}></div>
                <p>UI/UX Design — 2024</p>
              </div>
              <div className={styles.projectDesc}>
                <h3>ReachOut — Web App</h3>
                <p>
                  ReachOut supports formerly incarcerated individuals by offering resources, building community, and aiding reintegration — a space for growth, empowerment, and second chances.
                </p>
              </div>
              <Link href="/pages/ReachOut">
                <button className={styles.viewBtn}>
                  View Project 
                  <span> &#8599;</span>
                </button>
              </Link>
            </div>
            <Image 
              src={"/reachoutlaptop.jpg"}
              width={600}
              height={400}
              alt="reachout website on laptop mockup"
            />
          </div>
          <div className={styles.recentCard}>
            <div className={styles.projText}>
              <div className={styles.projectType}>
                <div className={styles.circle}></div>
                <p>Graphic Design — 2024</p>
              </div>
              <div className={styles.projectDesc}>
                <h3>fizzy — Branding</h3>
                <p>
                  fizzy is a sparkling aid series with flavours like berries, lemon hibiscus, and grapes. With a playful design, it is perfect from morning to midnight — a delightful burst of flavour for any occasion.
                </p>
              </div>
              <Link href="/pages/Fizzy">
                <button className={styles.viewBtn}>
                  View Project 
                  <span> &#8599;</span>
                </button>
              </Link>
            </div>
            <Image 
              src={"/threecans-rectangular.jpg"}
              width={600}
              height={400}
              alt="three cans of fizzy flavours mockup"
            />
          </div>
          <div className={styles.recentCard}>
            <div className={styles.projText}>
              <div className={styles.projectType}>
                <div className={styles.circle}></div>
                <p>Graphic Design — 2024</p>
              </div>
              <div className={styles.projectDesc}>
                <h3>aespa — Poster</h3>
                <p>
                  A concept poster for aespa's Japanese single, Hot Mess, drawing inspiration from Y2K Japanese magazine covers.
                </p>
              </div>
              <Link href="/pages/Ningning">
                <button className={styles.viewBtn}>
                  View Project 
                  <span> &#8599;</span>
                </button>
              </Link>
            </div>
            <Image 
              src={"/aespa-rectangular.jpg"}
              width={600}
              height={400}
              alt="three cans of fizzy flavours mockup"
            />
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
