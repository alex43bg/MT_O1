import React from 'react'
import './Logo.css';
const Logo = () => {
	const fillColor = '#87C232'
	return (
		<svg
			className='Logo-svg'
			width='350'
			height='120'
			viewBox='0 0 408 185'
			fill='red'
			xmlns='http://www.w3.org/2000/svg'
			z-index='10'
		>
			<path
				d='M279.278 42.3387C278.689 42.4539 277.789 42.6555 277.324 42.7419C272.609 43.7212 266.282 47.7535 263.056 51.9009C261.784 53.485 260.171 56.682 259.365 59.0726L258.651 61.2039L258.558 90.2938C258.496 109.793 258.589 120.046 258.806 121.4C260.326 130.645 267.305 137.932 277.262 140.582C281.79 141.791 289.359 141.331 293.391 139.631L294.166 139.315V116.763V94.2396L296.71 94.326C299.315 94.4413 300.432 94.1532 301.331 93.1452C301.703 92.742 301.797 89.5161 301.921 73.4159L302.076 54.1763L308.124 57.4309L314.172 60.7143L314.265 76.6993L314.328 92.6843L315.227 93.5772C316.127 94.4413 316.189 94.4701 319.104 94.4701H322.082V106.48V118.52L312.684 123.502C307.535 126.238 302.417 128.946 301.3 129.551L299.284 130.645L299.191 133.583C299.16 135.196 299.191 136.521 299.315 136.521C299.408 136.521 301.765 135.311 304.526 133.813C314.048 128.658 322.857 123.934 324.129 123.301L325.401 122.638L325.246 108.554L325.091 94.4701H328.068C330.767 94.4701 331.139 94.4125 331.914 93.7788L332.783 93.0876L332.938 81.9989L333.093 70.9101L338.521 73.8191C342.957 76.2097 344.383 77.1601 346.306 78.9459C351.238 83.4966 353.13 89.7754 351.517 96.1694C351.331 96.8894 350.618 98.5887 349.935 99.9136C348.943 101.843 348.199 102.794 346.306 104.522C344.259 106.394 342.957 107.229 337.187 110.311L330.457 113.883V116.878V119.873L331.48 119.297C332.007 118.98 335.326 117.224 338.831 115.351C342.336 113.479 346.027 111.406 347.051 110.714C351.176 108.036 354.557 103.802 356.294 99.136C357.1 96.947 357.225 96.1118 357.38 92.5979C357.504 89.0553 357.442 88.2201 356.821 85.9735C355.364 80.5588 352.262 76.2385 347.516 72.9551C346.12 72.0046 334.21 65.553 296.337 45.1901C295.221 44.5853 292.988 43.6924 291.375 43.174C288.769 42.3675 287.963 42.2523 284.396 42.1659C282.194 42.1083 279.867 42.1947 279.278 42.3387ZM283 70.0173V92.7996L283.899 93.6348C284.768 94.4413 284.923 94.4701 287.777 94.4701H290.754V114.775V135.052L288.986 135.57C286.288 136.348 280.736 136.29 277.882 135.455C270.965 133.41 265.723 127.967 264.359 121.4C264.172 120.536 264.079 108.756 264.079 91.5035C264.079 61.1175 264.079 61.4343 265.599 58.0933C268.298 52.2466 275.556 47.3502 281.697 47.2638L283 47.235V70.0173ZM299.129 62.7016C299.129 62.932 298.85 62.7016 297.578 61.4055L296.182 60.0519L297.671 61.3479C298.478 62.0392 299.129 62.644 299.129 62.7016ZM329.371 71.6302C328.813 72.1198 328.813 72.1198 329.216 71.6302C329.557 71.1982 329.526 71.0254 328.875 70.3341L328.161 69.5565L329.061 70.3341C329.96 71.1118 329.96 71.1406 329.371 71.6302Z'
				fill={fillColor}
			/>
			<path
				d='M77.632 63.92C81.6 63.92 85.0987 64.752 88.128 66.416C91.1573 68.0373 93.5253 70.5547 95.232 73.968C96.9813 77.3813 97.856 81.776 97.856 87.152V118H78.72V90.096C78.72 86.4267 78.1653 83.4613 77.056 81.2C75.9467 78.9387 73.7493 77.808 70.464 77.808C68.5013 77.808 66.7733 78.32 65.28 79.344C63.7867 80.368 62.6347 81.7973 61.824 83.632C61.0133 85.424 60.608 87.5787 60.608 90.096V118H42.752V90.096C42.752 86.4267 42.1333 83.4613 40.896 81.2C39.7013 78.9387 37.568 77.808 34.496 77.808C32.5333 77.808 30.8053 78.32 29.312 79.344C27.8187 80.3253 26.6667 81.7333 25.856 83.568C25.088 85.36 24.704 87.536 24.704 90.096V118H5.376V65.456H24.704V72.944C25.216 71.6213 26.3253 70.2773 28.032 68.912C29.7813 67.504 31.936 66.3307 34.496 65.392C37.056 64.4107 39.7653 63.92 42.624 63.92C45.7387 63.92 48.3413 64.3893 50.432 65.328C52.5227 66.224 54.2293 67.44 55.552 68.976C56.9173 70.512 58.0053 72.176 58.816 73.968C59.4133 72.432 60.5867 70.896 62.336 69.36C64.128 67.7813 66.3467 66.48 68.992 65.456C71.68 64.432 74.56 63.92 77.632 63.92ZM102.086 118V65.456H121.542V118H102.086ZM112.07 54.64C108.998 54.64 106.395 53.5733 104.262 51.44C102.129 49.264 101.062 46.6827 101.062 43.696C101.062 40.7093 102.129 38.128 104.262 35.952C106.438 33.7333 109.041 32.624 112.07 32.624C114.075 32.624 115.91 33.136 117.574 34.16C119.238 35.1413 120.582 36.464 121.606 38.128C122.63 39.792 123.142 41.648 123.142 43.696C123.142 46.6827 122.054 49.264 119.878 51.44C117.702 53.5733 115.099 54.64 112.07 54.64ZM149.794 119.536C144.717 119.536 140.301 118.299 136.546 115.824C132.791 113.307 129.869 109.957 127.778 105.776C125.73 101.552 124.706 96.88 124.706 91.76C124.706 86.64 125.73 81.9893 127.778 77.808C129.869 73.584 132.791 70.2133 136.546 67.696C140.301 65.1787 144.717 63.92 149.794 63.92C153.165 63.92 156.151 64.4533 158.754 65.52C161.357 66.544 163.469 67.7813 165.09 69.232C166.711 70.64 167.693 71.9413 168.034 73.136V29.936H187.49V118H168.226V109.488C167.415 111.067 166.093 112.645 164.258 114.224C162.423 115.76 160.269 117.019 157.794 118C155.319 119.024 152.653 119.536 149.794 119.536ZM155.746 104.24C158.093 104.24 160.183 103.707 162.018 102.64C163.895 101.573 165.367 100.101 166.434 98.224C167.501 96.304 168.034 94.1493 168.034 91.76C168.034 89.3707 167.501 87.2373 166.434 85.36C165.367 83.44 163.895 81.9467 162.018 80.88C160.183 79.7707 158.093 79.216 155.746 79.216C153.485 79.216 151.437 79.7707 149.602 80.88C147.81 81.9467 146.381 83.44 145.314 85.36C144.29 87.2373 143.778 89.3707 143.778 91.76C143.778 94.1493 144.29 96.304 145.314 98.224C146.381 100.101 147.81 101.573 149.602 102.64C151.437 103.707 153.485 104.24 155.746 104.24ZM191.726 118V65.456H211.182V118H191.726ZM201.71 54.64C198.638 54.64 196.035 53.5733 193.902 51.44C191.769 49.264 190.702 46.6827 190.702 43.696C190.702 40.7093 191.769 38.128 193.902 35.952C196.078 33.7333 198.681 32.624 201.71 32.624C203.715 32.624 205.55 33.136 207.214 34.16C208.878 35.1413 210.222 36.464 211.246 38.128C212.27 39.792 212.782 41.648 212.782 43.696C212.782 46.6827 211.694 49.264 209.518 51.44C207.342 53.5733 204.739 54.64 201.71 54.64Z'
				fill={fillColor}
			/>
			<path
				d='M96.06 141.58H99.64V134.84H100.92V141.58H105.6V142.86H100.92V153.96C100.92 155.173 101.147 156.02 101.6 156.5C102.053 156.967 102.587 157.2 103.2 157.2C103.827 157.2 104.293 157.093 104.6 156.88C104.907 156.667 105.087 156.527 105.14 156.46L105.92 157.52C105.853 157.587 105.707 157.7 105.48 157.86C105.253 158.02 104.947 158.16 104.56 158.28C104.187 158.413 103.72 158.48 103.16 158.48C102.187 158.48 101.353 158.153 100.66 157.5C99.98 156.833 99.64 155.76 99.64 154.28V142.86H96.06V141.58ZM126.768 150.42C126.768 152.5 127.235 154.153 128.168 155.38C129.115 156.593 130.515 157.2 132.368 157.2C134.222 157.2 135.615 156.593 136.548 155.38C137.495 154.153 137.968 152.5 137.968 150.42V141.58H139.248V150.76C139.248 152.227 138.982 153.547 138.448 154.72C137.915 155.88 137.135 156.8 136.108 157.48C135.095 158.147 133.848 158.48 132.368 158.48C130.902 158.48 129.655 158.147 128.628 157.48C127.602 156.8 126.822 155.88 126.288 154.72C125.755 153.547 125.488 152.227 125.488 150.76V141.58H126.768V150.42ZM168.266 141.1C169.266 141.1 170.246 141.32 171.206 141.76C172.166 142.2 172.953 142.9 173.566 143.86C174.193 144.807 174.506 146.04 174.506 147.56V158H173.186V147.98C173.186 145.967 172.72 144.533 171.786 143.68C170.853 142.813 169.666 142.38 168.226 142.38C167.266 142.38 166.34 142.66 165.446 143.22C164.553 143.78 163.813 144.54 163.226 145.5C162.653 146.46 162.366 147.533 162.366 148.72V158H161.086V141.58H162.366V144.94C162.446 144.46 162.76 143.92 163.306 143.32C163.853 142.72 164.56 142.2 165.426 141.76C166.293 141.32 167.24 141.1 168.266 141.1ZM195.989 149.68C195.989 150.973 196.229 152.2 196.709 153.36C197.189 154.507 197.922 155.44 198.909 156.16C199.895 156.88 201.142 157.24 202.649 157.24C203.862 157.24 204.855 157.033 205.629 156.62C206.415 156.207 207.029 155.727 207.469 155.18C207.922 154.62 208.235 154.133 208.409 153.72L209.589 154.52C209.055 155.387 208.462 156.12 207.809 156.72C207.155 157.307 206.402 157.747 205.549 158.04C204.709 158.333 203.722 158.48 202.589 158.48C200.869 158.48 199.415 158.08 198.229 157.28C197.042 156.467 196.142 155.387 195.529 154.04C194.929 152.68 194.629 151.193 194.629 149.58C194.629 147.98 194.935 146.54 195.549 145.26C196.175 143.98 197.075 142.967 198.249 142.22C199.435 141.473 200.862 141.1 202.529 141.1C204.009 141.1 205.295 141.447 206.389 142.14C207.495 142.82 208.355 143.753 208.969 144.94C209.582 146.127 209.889 147.48 209.889 149C209.889 149.12 209.882 149.24 209.869 149.36C209.855 149.467 209.849 149.573 209.849 149.68H195.989ZM208.469 148.4C208.442 147.533 208.242 146.633 207.869 145.7C207.509 144.767 206.902 143.98 206.049 143.34C205.195 142.687 204.022 142.36 202.529 142.36C200.955 142.36 199.709 142.673 198.789 143.3C197.882 143.927 197.222 144.707 196.809 145.64C196.409 146.573 196.169 147.493 196.089 148.4H208.469Z'
				fill={fillColor}
			/>
		</svg>
	)
}

export default Logo
