import { Mousewheel, Parallax, FreeMode, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import { masterClasses } from './js/mk.js'
import { swipe } from './js/swipe.js';

import 'swiper/css';
import './App.scss';
import './MediaApp.scss';

import mart8 from './images/mk/8mart.jpg';
// import elka from './images/mk/elka3d.jpg';
import special from './images/mk/special.jpg';
import kishLoren from './images/mk/kish-loren.jpg';
import craftCookie from './images/mk/craft-cookie.jpg';
import lolipops from './images/mk/lolipops.jpg';
import gingerbread from './images/mk/gingerbread.jpg';
import muffin from './images/mk/muffin.jpg';
import house from './images/mk/house.jpg';
import iceCream from './images/mk/ice-cream.jpg';
import choco from './images/mk/choco.jpg';
import cakePops from './images/mk/cake-pops.jpg';
import cottonCandy from './images/mk/cotton-candy.jpg';
import limonade from './images/mk/limonade.jpg';
import butter from './images/mk/butter.jpg';
import korporat from './images/mk/korporat.jpg';

import Modal from './modal/Modal';
import DescriptionMain from './components/DescriptionMain.jsx';
import Contacts from './components/Contacts.jsx';
// import NewYear from './components/NewYear.jsx';

function App() {
	const [controlledSwiper, setControlledSwiper] = useState(null);
	const [modalActive, setModalActive] = useState(false);
	const [moreActive, setMoreActive] = useState(false);
	const [specialActive, setSpecialActive] = useState(false);
	const [fitnesActive, setFitnesActive] = useState(false);
	const [masterClass, setMasterClass] = useState({
		title: "",
		minDescription: "",
		bigDescription: "",
		time: "",
		people: "",
		age: "",
		process: [],
		materials: [],
		required: [],
		nuances: [],
	})

	const popup = (desc) => {
		setModalActive(true)
		setMasterClass({
			title: desc.title,
			price: desc.price,
			minDescription: desc.minDescription,
			bigDescription: desc.bigDescription,
			time: desc.time,
			age: desc.age,
			materials: desc.materials,
			required: desc.required,
			nuances: desc.nuances,
		})
	}
	const onModalMore = () => {
		setMoreActive(true)
	}
	const desc = document.querySelector(".description");

	return (
		<div className="App">
			<DescriptionMain />

			<Swiper className="slider"
				modules={[Mousewheel, Parallax, FreeMode, Controller]}
				controller={{ control: controlledSwiper }}
				onSlideChange={(e) => e.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden")}
				allowTouchMove={true}
				freeMode={true} // листать слайдер без привязки к конкретной позиции
				centeredSlides={true} // первый слайд будет находиться в центре
				mousewheel={true} // переключение между слайдами по скроллу
				parallax={true} // параллакс
				breakpoints={{ // брейкпоинты
					0: { // от 0 до 679
						centeredSlides: false,
						slidesPerView: 1.2, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					760: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 20, // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<div className='slider__wrapper swiper-wrapper'>
					<SwiperSlide className='slider__item' onClick={() => {
						setSpecialActive(true);
					}}>
						<p className='slider__korporat spec'>Праздничная программа "Создай свою 3D композицию!"</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${mart8})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => {
						setFitnesActive(true);
					}}>
						<p className='slider__korporat spec'>Фитнес-шумиха! Отметь свой День Рождения!</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${special})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[0])}>
						<p>{masterClasses[0].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${kishLoren})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[1])}>
						<p>{masterClasses[1].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${craftCookie})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[2])}>
						<p>{masterClasses[2].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${lolipops})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[3])}>
						<p>{masterClasses[3].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${gingerbread})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[4])}>
						<p>{masterClasses[4].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${house})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[5])}>
						<p>{masterClasses[5].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${muffin})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[6])}>
						<p>{masterClasses[6].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${iceCream})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[7])}>
						<p>{masterClasses[7].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${choco})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[8])}>
						<p>{masterClasses[8].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${cakePops})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[9])}>
						<p>{masterClasses[9].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${cottonCandy})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[10])}>
						<p>{masterClasses[10].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${limonade})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[11])}>
						<p>{masterClasses[11].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${butter})` }}>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item' onClick={() => popup(masterClasses[12])}>
						<p className='slider__korporat'>{masterClasses[12].title}</p>
						<div
							className="slider__img"
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${korporat})` }}>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>

			<Swiper className="slider slider-bg"
				modules={[Parallax, Controller]}
				onSwiper={setControlledSwiper}
				centeredSlides={true} // первый слайд будет находиться в центре
				parallax={true} // параллакс
				breakpoints={{ // брейкпоинты
					0: { // от 0 до 679
						slidesPerView: 1.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					760: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${kishLoren})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${craftCookie})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${lolipops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${gingerbread})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${house})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${muffin})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${iceCream})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${choco})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cakePops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${cottonCandy})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${limonade})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${butter})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${butter})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${butter})` }}></div>
				</SwiperSlide>
			</Swiper>

			<Contacts />
			{/* <NewYear /> */}

			<Modal active={modalActive} setActive={setModalActive}>
				<h3 className="modal__title">{masterClass.title}</h3>
				<p className='modal__desc'>{masterClass.minDescription}</p>
				<p className='modal__desc'>Стоимость: <br />
					{masterClass.price?.map((item, index) =>
						<span key={index}>{item}<br /></span>
					)}
				</p>
				{masterClass.age && <button className='modal__more' onClick={() => { onModalMore() }}>Подробнее..</button>}
				<div className="modal__buttons">
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+выезд+мастер-класса."
						target="_blank"
						rel="noreferrer">
						Заказать выезд
					</a>
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+мастер-класс+в+мастерской."
						target="_blank"
						rel="noreferrer">
						Заказать в мастерской
					</a>
				</div>
			</Modal>
			{masterClass.age && <Modal active={moreActive} setActive={setMoreActive} className={"modal-more"}>
				<h3 className="modal-more__title">{masterClass.title}</h3>
				<p className="modal-more__description">{masterClass.bigDescription}</p>
				<p className="modal-more__time"><span>Время на изготовление:</span> {masterClass.time}</p>
				<p className="modal-more__age"><span>Возраст участников:</span> {masterClass.age}</p>
				<ol className="modal-more__materials">
					<h4 className="modal-more__subtitle">Какие материалы предоставим мы:</h4>
					{masterClass.materials.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
				<ol className="modal-more__requirements">
					<h4 className="modal-more__subtitle">Что потребуется от заказчика при заказе на выезд:</h4>
					{masterClass.required.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
				<ol className="modal-more__nuances">
					<h4 className="modal-more__subtitle">Нюансы:</h4>
					{masterClass.nuances.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
			</Modal>}
			<Modal active={fitnesActive} setActive={setFitnesActive}>
				<ol style={{ padding: "20px 20px 0 20px" }}>
					<li>Отметчай свой День рождения "По-спортивному"!!! </li>
					<li>3-х часовая увлекательная программа детского праздника в World Class</li>
					<li>Собирай команду 15 человек</li>
					<li>Приглашай на Красноармейскую 64</li>
					<li>Погружайся в мастер-класс по по приготовлению правильных перекусов, быстрых смузи, и полезных десертов</li>
					<li>Участвуй в познавательном квесте</li>
					<li>Устрой соревнования на "татами"</li>
					<li>Получай подарки и незабыванмые впечатления</li>
					<li>Взрослые скучать не будут!</li>
				</ol>
				<div className="modal__buttons">
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+ФИТНЕС-ШУМИХУ!"
						target="_blank"
						rel="noreferrer">
						Заказать <br />ФИТНЕС-ШУМИХУ!
					</a>
				</div>
			</Modal>
			<Modal active={specialActive} setActive={setSpecialActive}>
				<ol style={{ padding: "20px 20px 0 20px" }}>
					<li>Праздничная программа "Создай свою 3D композицию!"</li>
					<li>Приглашайте любимых дам, мам, бабушек, сестёр, подруг, коллег, устройте праздник для дочерей или любых других прекрасных особ!</li>
					<li>Приходите с семьёй, друзьями или коллегами!</li>
					<li>Программа на 2,5 часа.</li>
					<li>Погружаемся во вкусный Мастер класс, создаём пряничную 3D композицию, декорируем глазурной росписью, а также устроим чаепитие!</li>
					<li>Нас порадует живая музыка и голос, вечер завершит праздничный концерт!</li>
					<li>Да, кстати, билетов мало, не пропусти!</li><br />

					Стоимость для одной персоны - 750₽.
				</ol>
				<div className="modal__buttons">
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+праздничную+программу!"
						target="_blank"
						rel="noreferrer">
						Заказать <br />Праздничную программу!
					</a>
				</div>
			</Modal>
			{setTimeout(swipe, 100)}
		</div >
	);
}

export default App;
