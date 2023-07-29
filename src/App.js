import { useEffect, useRef, useState } from 'react'
import './App.css'

import kronshtein1 from './assets/kronshtein1.jpg'
import kronshtein10 from './assets/kronshtein10.jpg'
import kronshtein11 from './assets/kronshtein11.jpg'
import kronshtein12 from './assets/kronshtein12.jpg'
import kronshtein13 from './assets/kronshtein13.jpg'
import kronshtein14 from './assets/kronshtein14.jpg'
import kronshtein15 from './assets/kronshtein15.jpg'
import kronshtein16 from './assets/kronshtein16.jpg'
import kronshtein17 from './assets/kronshtein17.jpg'
import kronshtein18 from './assets/kronshtein18.jpg'
import kronshtein19 from './assets/kronshtein19.jpg'
import kronshtein2 from './assets/kronshtein2.jpg'
import kronshtein20 from './assets/kronshtein20.jpg'
import kronshtein21 from './assets/kronshtein21.jpg'
import kronshtein22 from './assets/kronshtein22.jpg'
import kronshtein23 from './assets/kronshtein23.jpg'
import kronshtein24 from './assets/kronshtein24.jpg'
import kronshtein25 from './assets/kronshtein25.jpg'
import kronshtein26 from './assets/kronshtein26.jpg'
import kronshtein27 from './assets/kronshtein27.jpg'
import kronshtein28 from './assets/kronshtein28.jpg'
import kronshtein29 from './assets/kronshtein29.jpg'
import kronshtein3 from './assets/kronshtein3.jpg'
import kronshtein30 from './assets/kronshtein30.jpg'
import kronshtein4 from './assets/kronshtein4.jpg'
import kronshtein5 from './assets/kronshtein5.jpg'
import kronshtein6 from './assets/kronshtein6.jpg'
import kronshtein7 from './assets/kronshtein7.jpg'
import kronshtein8 from './assets/kronshtein8.jpg'
import kronshtein9 from './assets/kronshtein9.jpg'

function App() {
	const danoValues = [
		{
			F1: 5,
			F2: 15,
		},
		{
			F1: 10,
			F2: 4,
		},
		{
			F1: 7,
			F2: 11,
		},
		{
			F1: 8,
			F2: 16,
		},
		{
			F1: 3,
			F2: 7,
		},
		{
			F1: 5,
			F2: 19,
		},
		{
			F1: 6,
			F2: 9,
		},
		{
			F1: 2,
			F2: 17,
		},
		{
			F1: 10,
			F2: 6,
		},
		{
			F1: 7,
			F2: 15,
		},
		{
			F1: 3,
			F2: 12,
		},
		{
			F1: 9,
			F2: 13,
		},
		{
			F1: 5,
			F2: 14,
		},
		{
			F1: 6,
			F2: 20,
		},
		{
			F1: 9,
			F2: 5,
		},
		{
			F1: 4,
			F2: 14,
		},
		{
			F1: 7,
			F2: 3,
		},
		{
			F1: 4,
			F2: 18,
		},
		{
			F1: 9,
			F2: 3,
		},
		{
			F1: 16,
			F2: 6,
		},
		{
			F1: 8,
			F2: 4,
		},
		{
			F1: 14,
			F2: 8,
		},
		{
			F1: 6,
			F2: 11,
		},
		{
			F1: 12,
			F2: 4,
		},
		{
			F1: 2,
			F2: 19,
		},
		{
			F1: 10,
			F2: 19,
		},
		{
			F1: 11,
			F2: 18,
		},
		{
			F1: 7,
			F2: 16,
		},
		{
			F1: 7,
			F2: 16,
		},
		{
			F1: 5,
			F2: 14,
		},
	]

	const kronshteinImgs = [
		kronshtein1,
		kronshtein2,
		kronshtein3,
		kronshtein4,
		kronshtein5,
		kronshtein6,
		kronshtein7,
		kronshtein8,
		kronshtein9,
		kronshtein10,
		kronshtein11,
		kronshtein12,
		kronshtein13,
		kronshtein14,
		kronshtein15,
		kronshtein16,
		kronshtein17,
		kronshtein18,
		kronshtein19,
		kronshtein20,
		kronshtein21,
		kronshtein22,
		kronshtein23,
		kronshtein24,
		kronshtein25,
		kronshtein26,
		kronshtein27,
		kronshtein28,
		kronshtein29,
		kronshtein30,
	]

	const [activeIndexOfKronshteinImg, setActiveIndexOfKronshteinImg] = useState()
	const [F1, setF1] = useState('')
	const [F2, setF2] = useState('')
	const [example1, setExample1] = useState('')
	const [example2, setExample2] = useState('')
	const [example3, setExample3] = useState('')
	const [isRightExample1, setIsRightExample1] = useState(null)
	const [isRightExample2, setIsRightExample2] = useState(null)
	const [isRightExample3, setIsRightExample3] = useState(null)

	const [solutionValueToExample1, setSolutionValueToExample1] = useState(null)
	const [isNeedToShowValueToExample1, setIsNeedToShowValueToExample1] =
		useState(false)

	const [solutionValueToExample2, setSolutionValueToExample2] = useState(null)
	const [isNeedToShowValueToExample2, setIsNeedToShowValueToExample2] =
		useState(false)

	const [isNeedToShowValueToExample3, setIsNeedToShowValueToExample3] =
		useState(false)

	const [buildFiguresRows, setBuildFiguresRows] = useState([
		{
			columns: [
				{
					lines: [
						{ className: 'build__line--blue gradus-right-0' },
						{ className: 'build__line--blue gradus-right--15' },
						{ className: 'build__line--blue gradus-right--30' },
						{ className: 'build__line--blue gradus-right--45' },
						{ className: 'build__line--blue gradus-right--60' },
						{ className: 'build__line--blue gradus-right--75' },
						{ className: 'build__line--blue gradus-right--90' },
					],
					graduses: [
						{
							value: 90,
							direction: 'top-right',
						},
						{
							value: 75,
							direction: 'top-right',
						},
						{
							value: 60,
							direction: 'top-right',
						},
						{
							value: 45,
							direction: 'top-right',
						},
						{
							value: 30,
							direction: 'top-right',
						},
						{
							value: 15,
							direction: 'top-right',
						},
						{
							value: 0,
							direction: 'top-right',
						},
					],
				},
				{
					lines: [
						{ className: 'build__line--blue gradus-right-0' },
						{ className: 'build__line--blue gradus-right-15' },
						{ className: 'build__line--blue gradus-right-30' },
						{ className: 'build__line--blue gradus-right-45' },
						{ className: 'build__line--blue gradus-right-60' },
						{ className: 'build__line--blue gradus-right-75' },
						{ className: 'build__line--blue gradus-right-90' },
					],

					graduses: [
						{
							value: 90,
							direction: 'bottom-right',
						},
						{
							value: 75,
							direction: 'bottom-right',
						},
						{
							value: 60,
							direction: 'bottom-right',
						},
						{
							value: 45,
							direction: 'bottom-right',
						},
						{
							value: 30,
							direction: 'bottom-right',
						},
						{
							value: 15,
							direction: 'bottom-right',
						},
						{
							value: 0,
							direction: 'bottom-right',
						},
					],
				},
				{
					lines: [
						{ className: 'build__line--blue gradus-left-0' },
						{ className: 'build__line--blue gradus-left-15' },
						{ className: 'build__line--blue gradus-left-30' },
						{ className: 'build__line--blue gradus-left-45' },
						{ className: 'build__line--blue gradus-left-60' },
						{ className: 'build__line--blue gradus-left-75' },
						{ className: 'build__line--blue gradus-left-90' },
					],

					graduses: [
						{
							value: 90,
							direction: 'top-left',
						},
						{
							value: 75,
							direction: 'top-left',
						},
						{
							value: 60,
							direction: 'top-left',
						},
						{
							value: 45,
							direction: 'top-left',
						},
						{
							value: 30,
							direction: 'top-left',
						},
						{
							value: 15,
							direction: 'top-left',
						},
						{
							value: 0,
							direction: 'top-left',
						},
					],
				},
				{
					lines: [
						{ className: 'build__line--blue gradus-left-0' },
						{ className: 'build__line--blue gradus-left--15' },
						{ className: 'build__line--blue gradus-left--30' },
						{ className: 'build__line--blue gradus-left--45' },
						{ className: 'build__line--blue gradus-left--60' },
						{ className: 'build__line--blue gradus-left--75' },
						{ className: 'build__line--blue gradus-left--90' },
					],

					graduses: [
						{
							value: 90,
							direction: 'bottom-left',
						},
						{
							value: 75,
							direction: 'bottom-left',
						},
						{
							value: 60,
							direction: 'bottom-left',
						},
						{
							value: 45,
							direction: 'bottom-left',
						},
						{
							value: 30,
							direction: 'bottom-left',
						},
						{
							value: 15,
							direction: 'bottom-left',
						},
						{
							value: 0,
							direction: 'bottom-left',
						},
					],
				},
			],
		},
		{
			columns: [
				{
					lines: [
						{ className: 'build__line--red gradus-right-0' },
						{ className: 'build__line--red gradus-right--15' },
						{ className: 'build__line--red gradus-right--30' },
						{ className: 'build__line--red gradus-right--45' },
						{ className: 'build__line--red gradus-right--60' },
						{ className: 'build__line--red gradus-right--75' },
						{ className: 'build__line--red gradus-right--90' },
					],
					graduses: [
						{
							value: 90,
							direction: 'top-right',
						},
						{
							value: 75,
							direction: 'top-right',
						},
						{
							value: 60,
							direction: 'top-right',
						},
						{
							value: 45,
							direction: 'top-right',
						},
						{
							value: 30,
							direction: 'top-right',
						},
						{
							value: 15,
							direction: 'top-right',
						},
						{
							value: 0,
							direction: 'top-right',
						},
					],
				},
				{
					lines: [
						{ className: 'build__line--red gradus-right-0' },
						{ className: 'build__line--red gradus-right-15' },
						{ className: 'build__line--red gradus-right-30' },
						{ className: 'build__line--red gradus-right-45' },
						{ className: 'build__line--red gradus-right-60' },
						{ className: 'build__line--red gradus-right-75' },
						{ className: 'build__line--red gradus-right-90' },
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-right',
						},
						{
							value: 75,
							direction: 'bottom-right',
						},
						{
							value: 60,
							direction: 'bottom-right',
						},
						{
							value: 45,
							direction: 'bottom-right',
						},
						{
							value: 30,
							direction: 'bottom-right',
						},
						{
							value: 15,
							direction: 'bottom-right',
						},
						{
							value: 0,
							direction: 'bottom-right',
						},
					],
				},

				{
					lines: [
						{ className: 'build__line--red gradus-left-0' },
						{ className: 'build__line--red gradus-left-15' },
						{ className: 'build__line--red gradus-left-30' },
						{ className: 'build__line--red gradus-left-45' },
						{ className: 'build__line--red gradus-left-60' },
						{ className: 'build__line--red gradus-left-75' },
						{ className: 'build__line--red gradus-left-90' },
					],
					graduses: [
						{
							value: 90,
							direction: 'top-left',
						},
						{
							value: 75,
							direction: 'top-left',
						},
						{
							value: 60,
							direction: 'top-left',
						},
						{
							value: 45,
							direction: 'top-left',
						},
						{
							value: 30,
							direction: 'top-left',
						},
						{
							value: 15,
							direction: 'top-left',
						},
						{
							value: 0,
							direction: 'top-left',
						},
					],
				},
				{
					lines: [
						{ className: 'build__line--red gradus-left-0' },
						{ className: 'build__line--red gradus-left--15' },
						{ className: 'build__line--red gradus-left--30' },
						{ className: 'build__line--red gradus-left--45' },
						{ className: 'build__line--red gradus-left--60' },
						{ className: 'build__line--red gradus-left--75' },
						{ className: 'build__line--red gradus-left--90' },
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-left',
						},
						{
							value: 75,
							direction: 'bottom-left',
						},
						{
							value: 60,
							direction: 'bottom-left',
						},
						{
							value: 45,
							direction: 'bottom-left',
						},
						{
							value: 30,
							direction: 'bottom-left',
						},
						{
							value: 15,
							direction: 'bottom-left',
						},
						{
							value: 0,
							direction: 'bottom-left',
						},
					],
				},
			],
		},
		{
			columns: [
				{
					lines: [
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-0',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--15',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--30',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--45',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--60',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--75',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right--90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'top-right',
						},
						{
							value: 75,
							direction: 'top-right',
						},
						{
							value: 60,
							direction: 'top-right',
						},
						{
							value: 45,
							direction: 'top-right',
						},
						{
							value: 30,
							direction: 'top-right',
						},
						{
							value: 15,
							direction: 'top-right',
						},
						{
							value: 0,
							direction: 'top-right',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-0',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-15',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-30',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-45',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-60',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-75',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-right-90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-right',
						},
						{
							value: 75,
							direction: 'bottom-right',
						},
						{
							value: 60,
							direction: 'bottom-right',
						},
						{
							value: 45,
							direction: 'bottom-right',
						},
						{
							value: 30,
							direction: 'bottom-right',
						},
						{
							value: 15,
							direction: 'bottom-right',
						},
						{
							value: 0,
							direction: 'bottom-right',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-0',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-15',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-30',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-45',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-60',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-75',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'top-left',
						},
						{
							value: 75,
							direction: 'top-left',
						},
						{
							value: 60,
							direction: 'top-left',
						},
						{
							value: 45,
							direction: 'top-left',
						},
						{
							value: 30,
							direction: 'top-left',
						},
						{
							value: 15,
							direction: 'top-left',
						},
						{
							value: 0,
							direction: 'top-left',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--green build__line--green-gradus gradus-left-0',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--15',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--30',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--45',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--60',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--75',
						},
						{
							className:
								'build__line--green build__line--green-gradus gradus-left--90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-left',
						},
						{
							value: 75,
							direction: 'bottom-left',
						},
						{
							value: 60,
							direction: 'bottom-left',
						},
						{
							value: 45,
							direction: 'bottom-left',
						},
						{
							value: 30,
							direction: 'bottom-left',
						},
						{
							value: 15,
							direction: 'bottom-left',
						},
						{
							value: 0,
							direction: 'bottom-left',
						},
					],
				},
			],
		},
		{
			columns: [
				{
					lines: [
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-0',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--15',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--30',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--45',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--60',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--75',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right--90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'top-right',
						},
						{
							value: 75,
							direction: 'top-right',
						},
						{
							value: 60,
							direction: 'top-right',
						},
						{
							value: 45,
							direction: 'top-right',
						},
						{
							value: 30,
							direction: 'top-right',
						},
						{
							value: 15,
							direction: 'top-right',
						},
						{
							value: 0,
							direction: 'top-right',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-0',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-15',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-30',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-45',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-60',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-75',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-right-90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-right',
						},
						{
							value: 75,
							direction: 'bottom-right',
						},
						{
							value: 60,
							direction: 'bottom-right',
						},
						{
							value: 45,
							direction: 'bottom-right',
						},
						{
							value: 30,
							direction: 'bottom-right',
						},
						{
							value: 15,
							direction: 'bottom-right',
						},
						{
							value: 0,
							direction: 'bottom-right',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-0',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-15',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-30',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-45',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-60',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-75',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'top-left',
						},
						{
							value: 75,
							direction: 'top-left',
						},
						{
							value: 60,
							direction: 'top-left',
						},
						{
							value: 45,
							direction: 'top-left',
						},
						{
							value: 30,
							direction: 'top-left',
						},
						{
							value: 15,
							direction: 'top-left',
						},
						{
							value: 0,
							direction: 'top-left',
						},
					],
				},
				{
					lines: [
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left-0',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--15',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--30',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--45',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--60',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--75',
						},
						{
							className:
								'build__line--orange build__line--orange-gradus gradus-left--90',
						},
					],
					graduses: [
						{
							value: 90,
							direction: 'bottom-left',
						},
						{
							value: 75,
							direction: 'bottom-left',
						},
						{
							value: 60,
							direction: 'bottom-left',
						},
						{
							value: 45,
							direction: 'bottom-left',
						},
						{
							value: 30,
							direction: 'bottom-left',
						},
						{
							value: 15,
							direction: 'bottom-left',
						},
						{
							value: 0,
							direction: 'bottom-left',
						},
					],
				},
			],
		},
	])
	const [buildAreaFigures, setBuildAreaFigures] = useState([])
	const [buildAreaInputs, setBuildAreaInputs] = useState([])

	const buildAreRef = useRef(null)

	const createAreaInput = e => {
		const areaPaddingLeft = 200
		const cursorPositionX = e.pageX - areaPaddingLeft
		const cursorPositionY =
			e.pageY - buildAreRef.current.getBoundingClientRect().top - window.scrollY

		setBuildAreaInputs(prev => [
			...prev,
			{ left: cursorPositionX, top: cursorPositionY },
		])
	}

	const deleteAreaInput = (top, left) => {
		setBuildAreaInputs(prev =>
			prev.map(el => {
				if (el?.left !== left && el?.top !== top) {
					return el
				} else {
					return null
				}
			})
		)
	}

	const addFigureToAreaFigures = className => {
		setBuildAreaFigures(prev => [...prev, { className }])
	}

	const deleteFigureToAreaFigures = className => {
		setBuildAreaFigures(prev => prev.filter(el => el.className !== className))
	}

	useEffect(() => {
		setF1(danoValues[activeIndexOfKronshteinImg]?.F1)
		setF2(danoValues[activeIndexOfKronshteinImg]?.F2)
	}, [activeIndexOfKronshteinImg])

	useEffect(() => {
		console.log(isRightExample2)
	}, [isRightExample2])

	const solveExample1 = () => {
		if (
			activeIndexOfKronshteinImg === 1 &&
			(example1 === 'F2 - RAB - RAC * cos30 = 0' ||
				example1 === 'RAB - F2 - RAC * cos30' ||
				example1 === 'RAB - RAC * cos30 - F2')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(6.34)
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example1 === 'F2 - RAB + RAC * cos30 = 0' ||
				example1 === 'RAC * cos30 - F2 + RAB = 0' ||
				example1 === 'RAC * cos30 + RAB - F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(21.32)
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example1 === 'RAB + F2 * cos60 - F1 * cos30 + RAC * cos60 = 0' ||
				example1 === 'F2 * cos60 - F1 * cos30 + RAB + RAC * cos60 = 0' ||
				example1 === 'RAC * cos60 - F1 * cos30 + RAB + F2 * cos60 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-6.96)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example1 === 'F1 - RAC * cos60 = 0' ||
				example1 === '-RAC * cos60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(29.86)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example1 === 'F1 - RAC * cos60 = 0' ||
				example1 === '-RAC * cos60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(1.85)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example1 === 'RAB * cos30 - F1 = 0' ||
				example1 === '-F1 + RAB * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(5.77)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example1 === '-RAC * cos30 - F2 = 0' ||
				example1 === '-F2 - RAC * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(11.195)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example1 === 'F2 - RAB - RAC * cos30 = 0' ||
				example1 === '-RAB - RAC * cos30 + F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(20.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example1 === 'RAB - RAC * cos60 - F2 = 0' ||
				example1 === '-F2 + RAB - RAC * cos60 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(0.23)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 10 &&
			(example1 === 'RAB * cos30 + F1 = 0' ||
				example1 === 'F1 + RAB * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-8.08)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 11 &&
			(example1 === 'RAB * cos30 - F1 = 0' ||
				example1 === '-F1 + RAB * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(3.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example1 === 'RAB + F2 * cos30 - F1 * cos60 = 0' ||
				example1 === 'F2 * cos30 - F1 * cos60 + RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-6.76)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example1 === 'RAB + RAC * cos30 - F1 = 0' ||
				example1 === '-F1 + RAB + RAC * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-19.25)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example1 === 'F2 - RAC * cos30 = 0' ||
				example1 === '-RAC * cos30 + F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(17.55)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example1 === 'RAC + F2 * cos45 - F1 * cos15 = 0' ||
				example1 === 'RAC - F1 * cos15 + F2 * cos45 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(5.87)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example1 === 'F1 - RAB - RAC * cos30 = 0' ||
				example1 === 'RAB - F2 - RAC * cos30 = 0' ||
				example1 === 'RAB - RAC * cos30 - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-20.25)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example1 === 'RAB - F2 - RAC * cos30 = 0' ||
				example1 === 'RAB - RAC * cos30 - F2 = 0' ||
				example1 === 'F2 - RAC * cos30 - RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(15.12)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example1 === 'F1 * cos30 + F2 * cos30 - RAC - RAB * cos60 = 0' ||
				example1 === 'F2 * cos30 + F1 * cos30 - RAC - RAB * cos60 = 0' ||
				example1 === 'RAC * cos60 - RAB * cos60 - F1 * cos30 - F2 * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-8.08)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example1 === 'F2 + RAC * cos60 - RAB = 0' ||
				example1 === 'RAC * cos60 - RAB + F2 = 0' ||
				example1 === 'RAC * cos60 + F2 - RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.2)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example1 === 'F2 * cos30 - RAC * cos30 = 0' ||
				example1 === 'RAC * cos30 - F2 * cos30 = 0' ||
				example1 === '-RAC * cos30 + F2 * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(10)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example1 === 'RAB - F2 * cos30 - F1 * cos60 = 0' ||
				example1 === 'RAB - F1 * cos60 - F2 * cos30 = 0' ||
				example1 === '-F2 * cos30 - F1 * cos60 + RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(7.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 22 &&
			(example1 === '-RAC + F1 * cos45 + F2 * cos45 = 0' ||
				example1 === 'F1 * cos45 + F2 * cos45 - RAC = 0' ||
				example1 === 'F2 * cos45 + F1 * cos45 - RAC = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-4.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example1 === 'RAB * cos30 + F2 * cos60 - F1 = 0' ||
				example1 === 'RAB * cos30 - F1 + F2 * cos60 = 0' ||
				example1 === 'F2 * cos60 + RAB * cos30 - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(0.58)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example1 === 'F1 - RAC * cos60 - F2 * cos30 = 0' ||
				example1 === '-RAC * cos60 - F2 * cos30 + F1 = 0' ||
				example1 === '-F2 * cos30 - RAC * cos60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-12.79)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example1 === 'RAB + RAC * cos45 + F2 * cos60 = 0' ||
				example1 === 'RAB + F2 * cos60 + RAC * cos45 = 0' ||
				example1 === 'F2 * cos60 + RAC * cos45 + RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-23.95)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example1 === 'RAB + F2 * cos60 - RAC * cos30 - F1 = 0' ||
				example1 === 'RAB - RAC * cos30 + F2 * cos60 - F1 = 0' ||
				example1 === 'F2 * cos60 - RAC * cos30 + RAB - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-27.998)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example1 === 'RAB - F1 * cos45 - RAC * cos45 = 0' ||
				example1 === 'RAB - RAC * cos45 - F1 * cos45 = 0' ||
				example1 === '-F1 * cos45 - RAC * cos45 + RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.45)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example1 === 'RAB + F1 * cos60 + RAC * cos60 - F2 * cos30 = 0' ||
				example1 === 'RAB + RAC * cos60 + F1 * cos60 - F2 * cos30 = 0' ||
				example1 === 'F1 * cos60 + RAC * cos60 + RAB - F2 * cos30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example1 === '-RAB + F1 + RAC * cos60 = 0' ||
				example1 === 'F1 + RAC * cos60 - RAB = 0' ||
				example1 === 'RAC * cos60 + F1 - RAB = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(16.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example1 === 'RAB - F1 * cos30 - RAC * cos15 - F2 * cos60 = 0' ||
				example1 === 'RAB - F2 * cos60 - RAC * cos15 - F1 * cos30 = 0' ||
				example1 === 'RAB - RAC * cos15 - F1 * cos30 - F2 * cos60 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-24.56)
			setIsNeedToShowValueToExample1(true)
		} else {
			setIsRightExample1(false)
		}
	}

	const solveExample2 = () => {
		if (
			activeIndexOfKronshteinImg === 1 &&
			(example2 === 'RAC * cos60 - F1 = 0' ||
				example2 === 'F1 - RAC * cos60 = 0')
		) {
			console.log('qweeeeeeeeeeeeeeeee')
			setIsRightExample2(true)
			console.log(isRightExample2)
			setSolutionValueToExample2(-10)
			setIsNeedToShowValueToExample2(true)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example2 === 'RAC * cos60 - F1 = 0' ||
				example2 === 'F1 - RAC * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(20)
			setIsNeedToShowValueToExample2(true)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example2 === 'RAC * cos30 - F2 * cos30 - F1 * cos60 = 0' ||
				example2 === 'F2 * cos30 - F1 * cos60 - RAC * cos30 = 0' ||
				example2 === 'F1 * cos60 - F2 * cos30 - RAC * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.04)
			setIsNeedToShowValueToExample1(true)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example2 === 'F2 + RAC * cos30 - RAB = 0' ||
				example2 === 'RAC * cos30 + F2 - RAB = 0' ||
				example2 === 'RAC * cos30 - RAB + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(16)
			setIsNeedToShowValueToExample1(true)
			// setIsNeedToShowValueToExample2(true);
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example2 === 'F2 - RAC * cos30 - RAB = 0' ||
				example2 === '-RAC * cos30 + F2 - RAB = 0' ||
				example2 === '-RAC * cos30 - RAB + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(6)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example2 === 'F2 + RAB * cos60 - RAC = 0' ||
				example2 === 'RAB * cos60 + F2 - RAC = 0' ||
				example2 === 'RAB * cos60 - RAC + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(21.89)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example2 === 'RAB + RAC * cos60 - F1 = 0' ||
				example2 === 'RAC * cos60 + RAB - F1 = 0' ||
				example2 === 'RAC * cos60 - F1 + RAB = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-10.39)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example2 === '-F1 - RAC * cos60 = 0' ||
				example2 === '-RAC * cos60 - F1 = 0' ||
				example2 === 'F1 + RAC * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-4)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example2 === '-F1 - RAC * cos30 = 0' ||
				example2 === '-RAC * cos30 - F1 = 0' ||
				example2 === 'F1 + RAC * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-11.55)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 10 &&
			(example2 === 'RAC + RAB * cos60 - F2 = 0' ||
				example2 === 'RAC * cos60 + RAB - F2 = 0' ||
				example2 === 'RAC * cos60 - F2 + RAB = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(19.04)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 11 &&
			(example2 === 'RAC + RAB * cos60 - F2 = 0' ||
				example2 === 'RAB * cos60 + RAC - F2 = 0' ||
				example2 === 'RAB * cos60 - F2 + RAC = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(10.27)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example2 === 'RAC - F2 * cos60 - F1 * cos30 = 0' ||
				example2 === '-F2 * cos60 - F1 * cos30 + RAC = 0' ||
				example2 === '-F2 * cos60 + RAC - F1 * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.29)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example2 === 'F2 - RAC * cos60 = 0' ||
				example2 === '-RAC * cos60 + F2 = 0' ||
				example2 === 'F2 + RAC * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(28)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example2 === 'RAB - RAC * cos60 - F1 = 0' ||
				example2 === '-RAC * cos60 + RAB - F1 = 0' ||
				example2 === 'RAB * cos60 - F1 - RAC = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(23.09)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example2 === 'RAB - F1 * cos75 - F2 * cos45 = 0' ||
				example2 === 'RAB * cos75 - F1 * cos45 - F2 * cos45 = 0' ||
				example2 === 'RAB * cos75 - F2 * cos45 - F1 * cos45 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(5.15)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example2 === '-F2 + RAC * cos60 = 0' ||
				example2 === '-RAC * cos60 + F2 = 0' ||
				example2 === 'F2 + RAC * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(28)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example2 === '-F1 + RAC * cos60 = 0' ||
				example2 === '-RAC * cos60 + F1 = 0' ||
				example2 === 'F1 + RAC * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(14)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example2 === 'F2 * cos60 + RAB * cos30 - F1 * cos60 = 0' ||
				example2 === 'RAB * cos30 + F2 * cos60 - F1 * cos60 = 0' ||
				example2 === 'RAB * cos30 - F1 * cos60 + F2 * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(23.09)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example2 === '-F1 - RAC * cos30 = 0' ||
				example2 === '-RAC * cos30 - F1 = 0' ||
				example2 === 'F1 + RAC * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-10.39)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example2 === 'RAB + RAC * cos60 + F2 * cos60 - F1 = 0' ||
				example2 === 'RAB * cos60 + RAC + F2 * cos60 - F1 = 0' ||
				example2 === 'RAB * cos60 + F2 * cos60 + RAC - F1 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(6)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example2 === '-RAC + F2 * cos60 - F1 * cos30 = 0' ||
				example2 === 'F2 * cos60 - RAC - F1 * cos30 = 0' ||
				example2 === 'F2 * cos60 - F1 * cos30 - RAC = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-4.93)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 22 &&
			(example2 === 'RAB + F1 * cos45 - F2 * cos45 = 0' ||
				example2 === 'F1 * cos45 + RAB - F2 * cos45 = 0' ||
				example2 === 'F1 * cos45 - F2 * cos45 + RAB = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.55)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example2 === 'F2 * cos30 - RAB * cos60 - RAC = 0' ||
				example2 === 'F2 * cos30 - RAC - RAB * cos60 = 0' ||
				example2 === 'F2 * cos30 - RAC + RAB * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(9.24)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example2 === '-RAB - RAC * cos30 + F2 * cos60 = 0' ||
				example2 === '-RAC * cos30 - RAB + F2 * cos60 = 0' ||
				example2 === 'F2 * cos60 - RAB - RAC * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(17.08)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example2 === 'F2 * cos30 - F1 - RAC * cos45 = 0' ||
				example2 === 'F2 * cos30 - RAC * cos45 - F1 = 0' ||
				example2 === '-RAC * cos45 + F2 * cos30 - F1 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(20.44)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example2 === 'F2 * cos30 + RAC * cos60 = 0' ||
				example2 === 'RAC * cos60 + F2 * cos30 = 0' ||
				example2 === 'RAC * cos60 + F2 * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-32.91)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example2 === '-F2 - RAC * cos45 + F1 * cos45 = 0' ||
				example2 === 'F1 * cos45 - RAC * cos45 - F2 = 0' ||
				example2 === '-RAC * cos45 - F2 + F1 * cos45 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-14.46)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example2 === 'F1 * cos30 + F2 * cos60 - RAC * cos30 = 0' ||
				example2 === 'F1 * cos30 - RAC * cos30 + F2 * cos60 = 0' ||
				example2 === '-RAC * cos30 + F1 * cos30 + F2 * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(16.24)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example2 === 'F2 - RAC * cos30 = 0' ||
				example2 === '-RAC * cos30 + F2 = 0' ||
				example2 === 'F2 + RAC * cos30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(18.48)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example2 === 'F1 * cos60 - F2 * cos30 - RAC * cos75 = 0' ||
				example2 === '-F2 * cos30 - RAC * cos75 + F1 * cos60 = 0' ||
				example2 === '-RAC * cos75 - F2 * cos30 + F1 * cos60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-37.16)
			setIsNeedToShowValueToExample2(true)
		} else {
			setIsRightExample2(false)
		}
	}

	const solveExample3 = () => {
		if (
			activeIndexOfKronshteinImg === 1 &&
			(example3 === 'F2 * cos30 + F1 * cos60 - RAC - RAB * cos30 = 0' ||
				example3 === 'F1 * cos60 + F2 * cos30 - RAC - RAB * cos30 = 0' ||
				example3 === 'F2 * cos30 - RAC - F1 * cos60 - RAB * cos30 = 0' ||
				example3 === 'F1 * cos60 - RAC - F2 * cos30 - RAB * cos30 = 0' ||
				example3 === '- RAB * cos30 - RAC + F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAB * cos30 - RAC + F1 * cos60 + F2 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example3 === 'F2 * cos30 - F1 * cos60 + RAC - RAB * cos30 = 0' ||
				example3 === '- F1 * cos60 + F2 * cos30 + RAC - RAB * cos30 = 0' ||
				example3 === 'RAC - RAB * cos30 + F2 * cos30 - F1 * cos60 = 0' ||
				example3 === 'RAC - RAB * cos30 - F1 * cos60 + F2 * cos30 = 0' ||
				example3 === 'RAC - RAB * cos30 + F1 * cos60 + F2 * cos30 = 0' ||
				example3 === 'RAC - RAB * cos30 + F2 * cos30 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example3 === 'RAC * cos60 - RAB * cos60 - F2 = 0' ||
				example3 === 'RAB * cos60 - RAC * cos60 - F2 = 0' ||
				example3 === 'RAB * cos60 - F2 - RAC * cos60 = 0' ||
				example3 === 'RAB * cos60 - F2 - RAC * cos60 = 0' ||
				example3 === '- RAB * cos60 - F2 - RAC * cos60 = 0' ||
				example3 === '- RAB * cos60 - F2 - RAC * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example3 === '-RAC - F2 * cos30 + RAB * cos30 + F1 * cos60 = 0' ||
				example3 === 'RAB * cos30 + F1 * cos60 - F2 * cos30 - RAC = 0' ||
				example3 === 'RAB * cos30 - F2 * cos30 + F1 * cos60 - RAC = 0' ||
				example3 === '-RAC - F2 * cos30 + RAB * cos30 + F1 * cos60 = 0' ||
				example3 === '-RAC - F2 * cos30 + F1 * cos60 + RAB * cos30 = 0' ||
				example3 === 'RAB * cos30 + F1 * cos60 - RAC - F2 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example3 === 'F2 * cos30 + F1 * cos60 - RAC - RAB * cos30 = 0' ||
				example3 === 'F1 * cos60 + F2 * cos30 - RAC - RAB * cos30 = 0' ||
				example3 === 'F2 * cos30 - RAC - F1 * cos60 - RAB * cos30 = 0' ||
				example3 === 'F1 * cos60 - RAC - F2 * cos30 - RAB * cos30 = 0' ||
				example3 === '- RAB * cos30 - RAC + F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAB * cos30 - RAC + F1 * cos60 + F2 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example3 === 'RAB + F2 * cos60 - F1 * cos30 - RAC * cos60 = 0' ||
				example3 === 'RAB - F1 * cos30 - F2 * cos60 + RAC * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - F1 * cos30 - RAC * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - RAC * cos60 - F1 * cos30 = 0' ||
				example3 === 'RAB - F1 * cos30 - RAC * cos60 - F2 * cos60 = 0' ||
				example3 === 'RAB + F2 * cos60 - RAC * cos60 - F1 * cos30 = 0' ||
				example3 === '-RAC - RAB * cos60 - F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '-RAC - RAB * cos60 - F2 * cos30 - F1 * cos60 = 0' ||
				example3 === '-RAC - F2 * cos30 - RAB * cos60 + F1 * cos60 = 0' ||
				example3 === '-RAC - F2 * cos30 - F1 * cos60 - RAB * cos60 = 0' ||
				example3 === '-RAC - F1 * cos30 - RAB * cos60 - F2 * cos60 = 0' ||
				example3 === '-RAC - F1 * cos30 - F2 * cos60 - RAB * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example3 === '- RAC - RAB * cos60 - F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAC - F2 * cos30 + F1 * cos60 - RAB * cos60 = 0' ||
				example3 === '- RAC - F2 * cos30 - RAB * cos60 + F1 * cos60 = 0' ||
				example3 === '- RAC + F1 * cos60 - F2 * cos30 - RAB * cos60 = 0' ||
				example3 === '- RAC + F1 * cos60 - RAB * cos60 - F2 * cos30 = 0' ||
				example3 === '- RAC - RAB * cos60 - F2 * cos30 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example3 === 'F2 * cos30 - F1 * cos60 - RAC - RAB * cos30 = 0' ||
				example3 === 'F1 * cos60 - F2 * cos30 - RAB * cos30 - RAC = 0' ||
				example3 === '- RAC - RAB * cos30 - F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAB * cos30 - RAC + F2 * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAB * cos30 - RAC + F1 * cos60 + F2 * cos30 = 0' ||
				example3 === 'F2 * cos30 - F1 * cos60 - RAB * cos30 - RAC = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example3 === 'RAB * cos60 - F1 * cos30 - RAC - F2 * cos60 = 0' ||
				example3 === 'RAB * cos60 - RAC - F1 * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAB * cos60 - RAC - F2 * cos60 - F1 * cos30 = 0' ||
				example3 === 'RAB * cos60 - F2 * cos60 - RAC - F1 * cos30 = 0' ||
				example3 === 'RAB * cos60 - F2 * cos60 - F1 * cos30 - RAC = 0' ||
				example3 === 'RAB * cos60 - RAC - F2 * cos60 - F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 10 &&
			(example3 === 'RAB + RAC * cos60 + F1 * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAB + RAC * cos60 - F2 * cos60 + F1 * cos30 = 0' ||
				example3 === 'RAB + F1 * cos30 - F2 * cos60 - RAC * cos60 = 0' ||
				example3 === 'RAB + F1 * cos30 - RAC * cos60 - F2 * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 + F1 * cos30 - RAC * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - RAC * cos60 + F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 11 &&
			(example3 === 'RAB + RAC * cos60 - F1 * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAB + RAC * cos60 - F2 * cos60 - F1 * cos30 = 0' ||
				example3 === 'RAB + F1 * cos30 - F2 * cos60 - RAC * cos60 = 0' ||
				example3 === 'RAB + F1 * cos30 - RAC * cos60 - F2 * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - F1 * cos30 - RAC * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - RAC * cos60 - F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example3 === 'RAB + RAC * cos60 - F1 * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAB + RAC * cos60 - F2 * cos60 - F1 * cos30 = 0' ||
				example3 === 'RAB + F1 * cos30 - F2 * cos60 - RAC * cos60 = 0' ||
				example3 === 'RAB + F1 * cos30 - RAC * cos60 - F2 * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - F1 * cos30 - RAC * cos60 = 0' ||
				example3 === 'RAB - F2 * cos60 - RAC * cos60 - F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example3 === 'RAC + RAB * cos30 - F1 * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAC + RAB * cos30 - F2 * cos60 - F1 * cos30 = 0' ||
				example3 === 'RAC + F1 * cos30 - F2 * cos60 - RAB * cos30 = 0' ||
				example3 === 'RAC + F1 * cos30 - RAB * cos30 - F2 * cos60 = 0' ||
				example3 === 'RAC - F2 * cos60 - F1 * cos30 - RAB * cos30 = 0' ||
				example3 === 'RAC - F2 * cos60 - RAB * cos30 - F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example3 === '- RAC - F1 * cos60 + RAB * cos60 + F2 * cos30 = 0' ||
				example3 === '- RAC - F1 * cos60 + F2 * cos30 + RAB * cos60 = 0' ||
				example3 === '- RAC + RAB * cos60 + F2 * cos30 - F1 * cos60 = 0' ||
				example3 === '- RAC + RAB * cos60 - F1 * cos60 + F2 * cos30 = 0' ||
				example3 === '- F2 * cos30 - RAC + F1 * cos60 + RAB * cos60 = 0' ||
				example3 === '- F2 * cos30 - RAC + RAB * cos60 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example3 === 'RAB * cos45 + F1 * cos60 - RAC * cos45 - F2 = 0' ||
				example3 === 'RAB * cos45 - F2 + F1 * cos60 - RAC * cos45 = 0' ||
				example3 === 'RAB * cos45 + F1 * cos60 - F2 - RAC * cos45 = 0' ||
				example3 === 'RAB * cos45 - F2 - RAC * cos45 + F1 * cos60 = 0' ||
				example3 === 'F1 * cos60 + RAB * cos45 - RAC * cos45 - F2 = 0' ||
				example3 === 'F1 * cos60 - F2 + RAB * cos45 - RAC * cos45 = 0' ||
				example3 === 'F1 * cos60 + RAB * cos45 - F2 - RAC * cos45 = 0' ||
				example3 === 'F1 * cos60 - F2 - RAC * cos45 + RAB * cos45 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example3 === '- RAC - RAB * cos30 + F1 * cos30 + F2 * cos60 = 0' ||
				example3 === '- RAC - F2 * cos30 + F1 * cos30 + RAB * cos60 = 0' ||
				example3 === '- RAC - RAB * cos30 + F2 * cos60 + F1 * cos30 = 0' ||
				example3 === '- RAC - F2 * cos30 + RAB * cos60 + F1 * cos30 = 0' ||
				example3 === '- F2 * cos30 - RAC + F1 * cos30 + RAB * cos60 = 0' ||
				example3 === '- F2 * cos30 - RAC + RAB * cos60 + F1 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example3 === '- RAC - F2 * cos30 + RAB * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAC - F2 * cos30 + F1 * cos60 + RAB * cos30 = 0' ||
				example3 === '- RAC - RAB * cos30 + RAB * cos30 + F1 * cos60 = 0' ||
				example3 === '- RAC - RAB * cos30 + F1 * cos60 + RAB * cos30 = 0' ||
				example3 === '- F2 * cos30 - RAC + F1 * cos60 + RAB * cos30 = 0' ||
				example3 === '- F2 * cos30 - RAC + RAB * cos30 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example3 === 'F1 + F2 * cos60 - RAC * cos30 - RAB * cos30 = 0' ||
				example3 === 'F1 - RAC * cos30 + F2 * cos60 - RAB * cos30 = 0' ||
				example3 === 'F1 + F2 * cos60 - RAB * cos30 - RAC * cos30 = 0' ||
				example3 === 'F1 - RAB * cos30 + F2 * cos60 - RAC * cos30 = 0' ||
				example3 === '- RAC * cos30 + F1 + F2 * cos60 - RAB * cos30 = 0' ||
				example3 === '- RAC * cos30 + F1 - RAB * cos30 + F2 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example3 === 'RAC + F1 * cos30 + F2 * cos60 - RAB * cos60 = 0' ||
				example3 === 'RAC + F1 * cos30 - RAB * cos60 + F2 * cos60 = 0' ||
				example3 === 'RAC + F2 * cos60 + F1 * cos30 - RAB * cos60 = 0' ||
				example3 === 'RAC + F2 * cos60 - RAB * cos60 + F1 * cos30 = 0' ||
				example3 === 'F1 * cos30 + RAC + F2 * cos60 - RAB * cos60 = 0' ||
				example3 === 'F1 * cos30 + RAC - RAB * cos60 + F2 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example3 === 'F2 + RAB * cos60 - RAC * cos60 - F1 * cos60 = 0' ||
				example3 === 'F2 - F1 * cos60 + RAB * cos60 - RAC * cos60 = 0' ||
				example3 === 'F2 + RAB * cos60 - F1 * cos60 - RAC * cos60 = 0' ||
				example3 === 'F2 - RAC * cos60 + RAB * cos60 - F1 * cos60 = 0' ||
				example3 === '- RAC * cos60 + F2 + RAB * cos60 - F1 * cos60 = 0' ||
				example3 === '- RAC * cos60 + F2 - F1 * cos60 + RAB * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example3 === 'RAB * cos60 - RAC * cos30 - F1 = 0' ||
				example3 === 'RAB * cos60 - F1 - RAC * cos30 = 0' ||
				example3 === 'RAB * cos60 - RAC * cos30 + F1 = 0' ||
				example3 === 'RAB * cos60 + F1 - RAC * cos30 = 0' ||
				example3 === '- RAC * cos30 + RAB * cos60 - F1 = 0' ||
				example3 === '- RAC * cos30 - F1 + RAB * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 22 &&
			(example3 === 'F1 + RAB * cos45 - RAC * cos45 = 0' ||
				example3 === 'F1 - RAC * cos45 + RAB * cos45 = 0' ||
				example3 === 'RAB * cos45 + F1 - RAC * cos45 = 0' ||
				example3 === '- RAC * cos45 + F1 + RAB * cos45 = 0' ||
				example3 === 'RAB * cos45 - RAC * cos45 + F1 = 0' ||
				example3 === '- RAC * cos45 + RAB * cos45 + F1 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example3 === 'F2 - RAC * cos30 - F1 * cos60 = 0' ||
				example3 === 'F2 - F1 * cos60 - RAC * cos30 = 0' ||
				example3 === 'F2 - RAC * cos30 - RAB * cos60 = 0' ||
				example3 === 'F2 - RAB * cos60 - RAC * cos30 = 0' ||
				example3 === '- RAC * cos30 - F1 * cos60 + F2 = 0' ||
				example3 === '- RAC * cos30 - RAB * cos60 + F2 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example3 === '-RAC - RAB * cos30 + F1 * cos60 = 0' ||
				example3 === '-RAC - RAB * cos30 + F1 * cos60 = 0' ||
				example3 === 'F1 * cos60 + F1 * cos60 - RAB * cos30 - RAC = 0' ||
				example3 === 'F1 * cos60 + F1 * cos60 - RAB * cos30 - RAC = 0' ||
				example3 === '-RAC - RAB * cos30 + F1 * cos60 + F1 * cos60 = 0' ||
				example3 === '-RAC - RAB * cos30 + F1 * cos60 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example3 === 'RAC + RAB * cos45 + F1 * cos45 - F2 * cos75 = 0' ||
				example3 === 'RAC + RAB * cos45 + F1 * cos45 - F2 * cos75 = 0' ||
				example3 === 'F1 * cos45 + F1 * cos45 - F2 * cos75 + RAB * cos45 = 0' ||
				example3 === 'F1 * cos45 + F1 * cos45 - F2 * cos75 + RAB * cos45 = 0' ||
				example3 === 'RAC + RAB * cos45 + F1 * cos45 - F2 * cos75 = 0' ||
				example3 === 'RAC + RAB * cos45 + F1 * cos45 - F2 * cos75 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example3 === 'F2 + RAB * cos60 - F1 * cos60 = 0' ||
				example3 === 'F2 - F1 * cos60 + RAB * cos60 = 0' ||
				example3 === 'F2 + RAB * cos60 - F1 * cos60 = 0' ||
				example3 === 'F2 - F1 * cos60 + RAB * cos60 = 0' ||
				example3 === 'F2 + RAB * cos60 - F1 * cos60 + F1 * cos60 = 0' ||
				example3 === 'F2 - F1 * cos60 + RAB * cos60 + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example3 === 'RAB * cos45 - F2 * cos45 - RAC = 0' ||
				example3 === 'RAB * cos45 - F2 * cos45 - RAC = 0' ||
				example3 === 'RAB * cos45 - RAC - F2 * cos45 = 0' ||
				example3 === 'RAB * cos45 - RAC - F2 * cos45 = 0' ||
				example3 === '-RAC - F2 * cos45 + RAB * cos45 = 0' ||
				example3 === '-RAC - F2 * cos45 + RAB * cos45 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example3 === 'F1 + RAB * соs - RAC * cos60 = 0' ||
				example3 === 'F1 * соs - RAC * cos60 + RAB = 0' ||
				example3 === 'F1 + RAB * соs - RAC * cos60 = 0' ||
				example3 === 'F1 * соs - RAC * cos60 + RAB = 0' ||
				example3 === 'F1 + RAB * соs - RAC * cos60 + F1 * cos60 = 0' ||
				example3 === 'F1 * соs - RAC * cos60 + RAB + F1 * cos60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example3 === 'RAC + F1 * cos60 - RAB * cos60 - F2 * cos30 = 0' ||
				example3 === 'RAC + F1 * cos60 - RAB * cos60 - F2 * cos30 = 0' ||
				example3 === 'F1 * cos60 - F2 * cos30 + RAB * cos60 - RAC = 0' ||
				example3 === 'F1 * cos60 - F2 * cos30 + RAB * cos60 - RAC = 0' ||
				example3 === 'RAC + F1 * cos60 - RAB * cos60 - F2 * cos30 = 0' ||
				example3 === 'RAC + F1 * cos60 - RAB * cos60 - F2 * cos30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example3 === 'RAB * cos30 - RAC * cos45 - F1 = 0' ||
				example3 === 'RAB * cos30 - F1 - RAC * cos45 = 0' ||
				example3 === 'RAB * cos30 - RAC * cos45 + F1 = 0' ||
				example3 === 'RAB * cos30 - F1 + RAC * cos45 = 0' ||
				example3 === 'RAB * cos30 - RAC * cos45 - F1 = 0' ||
				example3 === 'RAB * cos30 - F1 - RAC * cos45 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else {
			setIsRightExample3(false)
		}
	}

	return (
		<div className='App'>
			<div className='build'>
				<div
					className='build__area'
					onClick={createAreaInput}
					ref={buildAreRef}
				>
					<div
						className='build__area-top'
						style={{ paddingLeft: '100px', boxSizing: 'border-box' }}
					>
						<div className='build__area-row' style={{ marginBottom: '100px' }}>
							<div
								className='build__area-column'
								onClick={e => e.stopPropagation()}
							>
								<p>Дано</p>
								<p>F1 ={F1}</p>
								<p>F2 = {F2}</p>
								<p>
									RAB -{' '}
									{solutionValueToExample1 && isNeedToShowValueToExample1
										? solutionValueToExample1
										: '?'}
									, RAC -{' '}
									{solutionValueToExample2 && isNeedToShowValueToExample2
										? solutionValueToExample2
										: '?'}
								</p>
							</div>
							<div
								className='build__area-column'
								onClick={e => e.stopPropagation()}
							>
								<div>
									<img
										src={kronshteinImgs[activeIndexOfKronshteinImg - 1]}
										alt=''
									/>
								</div>
								<div
									style={{
										marginRight: '150px',
										display: kronshteinImgs[activeIndexOfKronshteinImg - 1]
											? 'none'
											: 'block',
									}}
								>
									Виберіть варіант
								</div>
								<div
									style={{
										display: kronshteinImgs[activeIndexOfKronshteinImg - 1]
											? 'none'
											: 'grid',
										gridTemplateColumns: '50px 50px 50px 50px',
									}}
								>
									<div
										onClick={() => {
											setActiveIndexOfKronshteinImg(1)
										}}
									>
										1
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(2)}>2</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(3)}>3</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(4)}>4</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(5)}>5</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(6)}>6</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(7)}>7</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(8)}>8</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(9)}>9</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(10)}>
										10
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(11)}>
										11
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(12)}>
										12
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(13)}>
										13
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(14)}>
										14
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(15)}>
										15
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(16)}>
										16
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(17)}>
										17
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(18)}>
										18
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(19)}>
										19
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(20)}>
										20
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(21)}>
										21
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(22)}>
										22
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(23)}>
										23
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(24)}>
										24
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(25)}>
										25
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(26)}>
										26
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(27)}>
										27
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(28)}>
										28
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(29)}>
										29
									</div>
									<div onClick={() => setActiveIndexOfKronshteinImg(30)}>
										30
									</div>
								</div>
							</div>
						</div>
						<div className='examples' onClick={e => e.stopPropagation()}>
							<p>
								(1), ΣFi<sub>x</sub> = 0
							</p>
							<input
								type='text'
								placeholder=''
								value={example1}
								onChange={e => {
									setExample1(e.target.value)
								}}
							/>
							<button onClick={solveExample1}>Вирішити</button>
							<div>
								{isRightExample1 === null ? (
									''
								) : isRightExample1 ? (
									<span className='right'>Все правильно</span>
								) : (
									<span className='unright'>Не правильно</span>
								)}
							</div>
							RAB -{' '}
							{solutionValueToExample1 && isNeedToShowValueToExample1
								? solutionValueToExample1 + 'kH'
								: '?'}
							<p>
								(2), ΣFi<sub>y</sub> = 0
							</p>
							<input
								type='text'
								placeholder=''
								value={example2}
								onChange={e => {
									setExample2(e.target.value)
								}}
							/>
							<button onClick={solveExample2}>Вирішити</button>
							<div>
								{isRightExample2 === null ? (
									''
								) : isRightExample2 ? (
									<span className='right'>Все правильно</span>
								) : (
									<span className='unright'>Не правильно</span>
								)}
							</div>
							RAC -{' '}
							{solutionValueToExample2 && isNeedToShowValueToExample2 + 'kH'
								? solutionValueToExample2 + 'kH'
								: '?'}
							<p>
								(3), ΣFi<sub>x'</sub> = 0
							</p>
							<input
								type='text'
								placeholder=''
								value={example3}
								onChange={e => {
									setExample3(e.target.value)
								}}
							/>
							<button onClick={solveExample3}>Вирішити</button>
							<div>
								{isRightExample3 === null ? (
									''
								) : isRightExample3 ? (
									<span className='right'>Все правильно</span>
								) : (
									<span className='unright'>Не правильно</span>
								)}
							</div>
							{isNeedToShowValueToExample3
								? `Відповідь: RAB = ${solutionValueToExample1}kH, RAC = ${solutionValueToExample2}kH`
								: ''}
						</div>
					</div>
					{buildAreaInputs.map(input => {
						if (input) {
							console.log(input)

							return (
								<input
									style={{ top: input.top, left: input.left }}
									autoFocus={true}
									className='build__area-input'
									onClick={e => {
										e.stopPropagation()
										deleteAreaInput(input.top, input.left)
									}}
								/>
							)
						} else {
							return <input style={{ display: 'none' }} />
						}
					})}
					{buildAreaFigures.map(el => {
						return (
							<div
								className={'build__line' + ' ' + el.className}
								onClick={e => {
									e.stopPropagation()
									deleteFigureToAreaFigures(el.className)
								}}
							></div>
						)
					})}
				</div>
				{buildFiguresRows.map(row => {
					return (
						<div className='build__figures-row'>
							{row.columns.map(column => {
								return (
									<div className='build__figures-column'>
										{column?.graduses?.map(gradus => {
											return (
												<div
													className={`gradus-point gradus-point-${gradus.value}-${gradus.direction}`}
												>
													{gradus.value}
												</div>
											)
										})}

										{column.lines.map(line => {
											return (
												<div
													className={'build__line' + ' ' + line.className}
													onClick={() => addFigureToAreaFigures(line.className)}
												></div>
											)
										})}
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default App
