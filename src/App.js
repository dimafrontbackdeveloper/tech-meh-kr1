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
			f1: 5,
			f2: 15,
		},
		{
			f1: 10,
			f2: 4,
		},
		{
			f1: 7,
			f2: 11,
		},
		{
			f1: 8,
			f2: 16,
		},
		{
			f1: 3,
			f2: 7,
		},
		{
			f1: 5,
			f2: 19,
		},
		{
			f1: 6,
			f2: 9,
		},
		{
			f1: 2,
			f2: 17,
		},
		{
			f1: 10,
			f2: 6,
		},
		{
			f1: 7,
			f2: 15,
		},
		{
			f1: 3,
			f2: 12,
		},
		{
			f1: 9,
			f2: 13,
		},
		{
			f1: 5,
			f2: 14,
		},
		{
			f1: 6,
			f2: 20,
		},
		{
			f1: 9,
			f2: 5,
		},
		{
			f1: 4,
			f2: 14,
		},
		{
			f1: 7,
			f2: 3,
		},
		{
			f1: 4,
			f2: 18,
		},
		{
			f1: 9,
			f2: 3,
		},
		{
			f1: 16,
			f2: 6,
		},
		{
			f1: 8,
			f2: 4,
		},
		{
			f1: 14,
			f2: 8,
		},
		{
			f1: 6,
			f2: 11,
		},
		{
			f1: 12,
			f2: 4,
		},
		{
			f1: 2,
			f2: 19,
		},
		{
			f1: 10,
			f2: 19,
		},
		{
			f1: 11,
			f2: 18,
		},
		{
			f1: 7,
			f2: 16,
		},
		{
			f1: 7,
			f2: 16,
		},
		{
			f1: 5,
			f2: 14,
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
	const [f1, setF1] = useState('')
	const [f2, setF2] = useState('')
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
		setF1(danoValues[activeIndexOfKronshteinImg]?.f1)
		setF2(danoValues[activeIndexOfKronshteinImg]?.f2)
	}, [activeIndexOfKronshteinImg])

	const solveExample1 = () => {
		if (
			activeIndexOfKronshteinImg === 1 &&
			(example1 === 'F2 - RAВ - RAС * соs30 = 0' ||
				example1 === 'RAB - F2 - RAC * cos30' ||
				example1 === 'RAB - RAC * cos30 - F2')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(6.34)
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example1 === 'F2 - RAВ + RAС * соs30 = 0' ||
				example1 === 'RAС * соs30 - F2 + RAВ = 0' ||
				example1 === 'RAС * соs30 + RAВ - F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(21.32)
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example1 === 'RAВ + F2 * соs60 - F1 * соs30 + RAС * соs60 = 0' ||
				example1 === 'F2 * соs60 - F1 * соs30 + RAВ + RAС * соs60 = 0' ||
				example1 === 'RAС * соs60 - F1 * соs30 + RAВ + F2 * соs60 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-6.96)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example1 === 'F1 - RAС * соs60 = 0' ||
				example1 === '-RAС * соs60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(29.86)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example1 === 'F1 - RAС * соs60 = 0' ||
				example1 === '-RAС * соs60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(1.85)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example1 === 'RAВ * соs30 - F1 = 0' ||
				example1 === '-F1 + RAВ * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(5.77)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example1 === '-RAС * соs30 - F2 = 0' ||
				example1 === '-F2 - RAС * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(11.195)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example1 === 'F2 - RAВ - RAС * соs30 = 0' ||
				example1 === '-RAВ - RAС * соs30 + F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(20.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example1 === 'RAВ - RAС * соs60 - F2 = 0' ||
				example1 === '-F2 + RAВ - RAС * соs60 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(0.23)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 10 &&
			(example1 === 'RAВ * соs30 + F1 = 0' ||
				example1 === 'F1 + RAВ * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-8.08)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 11 &&
			(example1 === 'RAВ * соs30 - F1 = 0' ||
				example1 === '-F1 + RAВ * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(3.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example1 === 'RAВ + F2 * соs30 - F1 * соs60 = 0' ||
				example1 === 'F2 * соs30 - F1 * соs60 + RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-6.76)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example1 === 'RAВ + RAС * соs30 - F1 = 0' ||
				example1 === '-F1 + RAВ + RAС * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-19.25)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example1 === 'F2 - RAС * соs30 = 0' ||
				example1 === '-RAС * соs30 + F2 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(17.55)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example1 === 'RAС + F2 * соs45 - F1 * соs15 = 0' ||
				example1 === 'RAС - F1 * соs15 + F2 * соs45 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(5.87)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example1 === 'F1 - RAВ - RAС * соs30 = 0' ||
				example1 === 'RAВ - F2 - RAС * соs30 = 0' ||
				example1 === 'RAВ - RAС * соs30 - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-20.25)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example1 === 'RAВ - F2 - RAС * соs30 = 0' ||
				example1 === 'RAВ - RAС * соs30 - F2 = 0' ||
				example1 === 'F2 - RAС * соs30 - RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(15.12)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example1 === 'F1 * соs30 + F2 * соs30 - RAС - RAВ * соs60 = 0' ||
				example1 === 'F2 * соs30 + F1 * соs30 - RAС - RAВ * соs60 = 0' ||
				example1 === 'RAС * соs60 - RAВ * соs60 - F1 * соs30 - F2 * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-8.08)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example1 === 'F2 + RAС * соs60 - RAВ = 0' ||
				example1 === 'RAС * соs60 - RAВ + F2 = 0' ||
				example1 === 'RAС * соs60 + F2 - RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.2)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example1 === 'F2 * соs30 - RAС * соs30 = 0' ||
				example1 === 'RAС * соs30 - F2 * соs30 = 0' ||
				example1 === '-RAС * соs30 + F2 * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(10)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example1 === 'RAВ - F2 * соs30 - F1 * соs60 = 0' ||
				example1 === 'RAВ - F1 * соs60 - F2 * соs30 = 0' ||
				example1 === '-F2 * соs30 - F1 * соs60 + RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(7.46)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 22 &&
			(example1 === '-RAС + F1 * соs45 + F2 * соs45 = 0' ||
				example1 === 'F1 * соs45 + F2 * соs45 - RAС = 0' ||
				example1 === 'F2 * соs45 + F1 * соs45 - RAС = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-4.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example1 === 'RAВ * соs30 + F2 * соs60 - F1 = 0' ||
				example1 === 'RAВ * соs30 - F1 + F2 * соs60 = 0' ||
				example1 === 'F2 * соs60 + RAВ * соs30 - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(0.58)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example1 === 'F1 - RAС * соs60 - F2 * соs30 = 0' ||
				example1 === '-RAС * соs60 - F2 * соs30 + F1 = 0' ||
				example1 === '-F2 * соs30 - RAС * соs60 + F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-12.79)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example1 === 'RAВ + RAС * соs45 + F2 * соs60 = 0' ||
				example1 === 'RAВ + F2 * соs60 + RAС * соs45 = 0' ||
				example1 === 'F2 * соs60 + RAС * соs45 + RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-23.95)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example1 === 'RAВ + F2 * соs60 - RAС * соs30 - F1 = 0' ||
				example1 === 'RAВ - RAС * соs30 + F2 * соs60 - F1 = 0' ||
				example1 === 'F2 * соs60 - RAС * соs30 + RAВ - F1 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-27.998)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example1 === 'RAВ - F1 * соs45 - RAС * соs45 = 0' ||
				example1 === 'RAВ - RAС * соs45 - F1 * соs45 = 0' ||
				example1 === '-F1 * соs45 - RAС * соs45 + RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.45)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example1 === 'RAВ + F1 * соs60 + RAС * соs60 - F2 * соs30 = 0' ||
				example1 === 'RAВ + RAС * соs60 + F1 * соs60 - F2 * соs30 = 0' ||
				example1 === 'F1 * соs60 + RAС * соs60 + RAВ - F2 * соs30 = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(-2.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example1 === '-RAВ + F1 + RAС * соs60 = 0' ||
				example1 === 'F1 + RAС * соs60 - RAВ = 0' ||
				example1 === 'RAС * соs60 + F1 - RAВ = 0')
		) {
			setIsRightExample1(true)
			setSolutionValueToExample1(16.24)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example1 === 'RAВ - F1 * соs30 - RAС * соs15 - F2 * соs60 = 0' ||
				example1 === 'RAВ - F2 * соs60 - RAС * соs15 - F1 * соs30 = 0' ||
				example1 === 'RAВ - RAС * соs15 - F1 * соs30 - F2 * соs60 = 0')
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
			(example2 === 'RAС * соs60 - F1 = 0' ||
				example2 === 'F1 - RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-10)
			setIsNeedToShowValueToExample2(true)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example2 === 'RAС * соs60 - F1 = 0' ||
				example2 === 'F1 - RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(20)
			setIsNeedToShowValueToExample2(true)
			setIsNeedToShowValueToExample1(true)
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example2 === 'RAС * соs30 - F2 * соs30 - F1 * соs60 = 0' ||
				example2 === 'F2 * соs30 - F1 * соs60 - RAС * соs30 = 0' ||
				example2 === 'F1 * соs60 - F2 * соs30 - RAС * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.04)
			setIsNeedToShowValueToExample1(true)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example2 === 'F2 + RAС * соs30 - RAВ = 0' ||
				example2 === 'RAС * соs30 + F2 - RAВ = 0' ||
				example2 === 'RAС * соs30 - RAВ + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(16)
			setIsNeedToShowValueToExample1(true)
			// setIsNeedToShowValueToExample2(true);
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example2 === 'F2 - RAС * соs30 - RAВ = 0' ||
				example2 === '-RAС * соs30 + F2 - RAВ = 0' ||
				example2 === '-RAС * соs30 - RAВ + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(6)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example2 === 'F2 + RAВ * соs60 - RAС = 0' ||
				example2 === 'RAВ * соs60 + F2 - RAС = 0' ||
				example2 === 'RAВ * соs60 - RAС + F2 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(21.89)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example2 === 'RAВ + RAС * соs60 - F1 = 0' ||
				example2 === 'RAС * соs60 + RAВ - F1 = 0' ||
				example2 === 'RAС * соs60 - F1 + RAВ = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-10.39)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example2 === '-F1 - RAС * соs60 = 0' ||
				example2 === '-RAС * соs60 - F1 = 0' ||
				example2 === 'F1 + RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-4)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example2 === '-F1 - RAС * соs30 = 0' ||
				example2 === '-RAС * соs30 - F1 = 0' ||
				example2 === 'F1 + RAС * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-11.55)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 10 &&
			(example2 === 'RAС + RAВ * соs60 - F2 = 0' ||
				example2 === 'RAС * соs60 + RAВ - F2 = 0' ||
				example2 === 'RAС * соs60 - F2 + RAВ = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(19.04)
			setIsNeedToShowValueToExample2(true)
		}
		if (
			activeIndexOfKronshteinImg === 11 &&
			(example2 === 'RAС + RAВ * соs60 - F2 = 0' ||
				example2 === 'RAВ * соs60 + RAС - F2 = 0' ||
				example2 === 'RAВ * соs60 - F2 + RAС = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(10.27)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example2 === 'RAС - F2 * соs60 - F1 * соs30 = 0' ||
				example2 === '-F2 * соs60 - F1 * соs30 + RAС = 0' ||
				example2 === '-F2 * соs60 + RAС - F1 * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.29)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example2 === 'F2 - RAС * соs60 = 0' ||
				example2 === '-RAС * соs60 + F2 = 0' ||
				example2 === 'F2 + RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(28)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example2 === 'RAВ - RAС * соs60 - F1 = 0' ||
				example2 === '-RAС * соs60 + RAВ - F1 = 0' ||
				example2 === 'RAВ * соs60 - F1 - RAС = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(23.09)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example2 === 'RAВ - F1 * соs 75° - F2 * соs45 = 0' ||
				example2 === 'RAВ * соs75° - F1 * соs45 - F2 * соs45 = 0' ||
				example2 === 'RAВ * соs75° - F2 * соs45 - F1 * соs45 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(5.15)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example2 === '-F2 + RAС * соs60 = 0' ||
				example2 === '-RAС * соs60 + F2 = 0' ||
				example2 === 'F2 + RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(28)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example2 === '-F1 + RAС * соs60 = 0' ||
				example2 === '-RAС * соs60 + F1 = 0' ||
				example2 === 'F1 + RAС * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(14)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example2 === 'F2 * соs60 + RAВ * соs30 - F1 * соs60 = 0' ||
				example2 === 'RAВ * соs30 + F2 * соs60 - F1 * соs60 = 0' ||
				example2 === 'RAВ * соs30 - F1 * соs60 + F2 * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(23.09)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example2 === '-F1 - RAС * соs30 = 0' ||
				example2 === '-RAС * соs30 - F1 = 0' ||
				example2 === 'F1 + RAС * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-10.39)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example2 === 'RAВ + RAС * соs60 + F2 * соs60 - F1 = 0' ||
				example2 === 'RAВ * соs60 + RAС + F2 * соs60 - F1 = 0' ||
				example2 === 'RAВ * соs60 + F2 * соs60 + RAС - F1 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(6)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example2 === '-RAС + F2 * соs60 - F1 * соs30 = 0' ||
				example2 === 'F2 * соs60 - RAС - F1 * соs30 = 0' ||
				example2 === 'F2 * соs60 - F1 * соs30 - RAС = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-4.93)
			setIsNeedToShowValueToExample2(true)
		}
		if (
			activeIndexOfKronshteinImg === 22 &&
			(example2 === 'RAВ + F1 * соs45 - F2 * соs45 = 0' ||
				example2 === 'F1 * соs45 + RAВ - F2 * соs45 = 0' ||
				example2 === 'F1 * соs45 - F2 * соs45 + RAВ = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(15.55)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example2 === 'F2 * соs30 - RAВ * соs60 - RAС = 0' ||
				example2 === 'F2 * соs30 - RAС - RAВ * соs60 = 0' ||
				example2 === 'F2 * соs30 - RAС + RAВ * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(9.24)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example2 === '-RAВ - RAС * соs30 + F2 * соs60 = 0' ||
				example2 === '-RAС * соs30 - RAВ + F2 * соs60 = 0' ||
				example2 === 'F2 * соs60 - RAВ - RAС * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(17.08)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example2 === 'F2 * соs30 - F1 - RAС * соs45 = 0' ||
				example2 === 'F2 * соs30 - RAС * соs45 - F1 = 0' ||
				example2 === '-RAС * соs45 + F2 * соs30 - F1 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(20.44)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example2 === 'F2 * соs30 + RAС * соs60 = 0' ||
				example2 === 'RAС * соs60 + F2 * соs30 = 0' ||
				example2 === 'RAС * соs60 + F2 * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-32.91)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example2 === '-F2 - RAС * соs45 + F1 * соs45 = 0' ||
				example2 === 'F1 * соs45 - RAС * соs45 - F2 = 0' ||
				example2 === '-RAС * соs45 - F2 + F1 * соs45 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(-14.46)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example2 === 'F1 * соs30 + F2 * соs60 - RAС * соs30 = 0' ||
				example2 === 'F1 * соs30 - RAС * соs30 + F2 * соs60 = 0' ||
				example2 === '-RAС * соs30 + F1 * соs30 + F2 * соs60 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(16.24)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example2 === 'F2 - RAС * соs30 = 0' ||
				example2 === '-RAС * соs30 + F2 = 0' ||
				example2 === 'F2 + RAС * соs30 = 0')
		) {
			setIsRightExample2(true)
			setSolutionValueToExample2(18.48)
			setIsNeedToShowValueToExample2(true)
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example2 === 'F1 * соs60 - F2 * соs30 - RAС * соs 75° = 0' ||
				example2 === '-F2 * соs30 - RAС * соs 75° + F1 * соs60 = 0' ||
				example2 === '-RAС * соs 75° - F2 * соs30 + F1 * соs60 = 0')
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
			(example3 === 'F2 * соs30 + F1 * соs60 - RAС - RAВ * соs30 = 0' ||
				example3 === 'F1 * соs60 + F2 * соs30 - RAС - RAВ * соs30 = 0' ||
				example3 === 'F2 * соs30 - RAС - F1 * соs60 - RAВ * соs30 = 0' ||
				example3 === 'F1 * соs60 - RAС - F2 * соs30 - RAВ * соs30 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F1 * соs60 + F2 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 2 &&
			(example3 === 'F2 * соs30 - F1 * соs60 + RAС - RAВ * соs30 = 0' ||
				example3 === '- F1 * соs60 + F2 * соs30 + RAС - RAВ * соs30 = 0' ||
				example3 === 'RAС - RAВ * соs30 + F2 * соs30 - F1 * соs60 = 0' ||
				example3 === 'RAС - RAВ * соs30 - F1 * соs60 + F2 * соs30 = 0' ||
				example3 === 'RAС - RAВ * соs30 + F1 * соs60 + F2 * соs30 = 0' ||
				example3 === 'RAС - RAВ * соs30 + F2 * соs30 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 3 &&
			(example3 === 'RAС * соs60 - RAВ * соs60 - F2 = 0' ||
				example3 === 'RAВ * соs60 - RAС * соs60 - F2 = 0' ||
				example3 === 'RAВ * соs60 - F2 - RAС * соs60 = 0' ||
				example3 === 'RAВ * соs60 - F2 - RAС * соs60 = 0' ||
				example3 === '- RAВ * соs60 - F2 - RAС * соs60 = 0' ||
				example3 === '- RAВ * соs60 - F2 - RAС * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 4 &&
			(example3 === '-RAС - F2 * соs30 + RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === 'RAВ * соs30 + F1 * соs60 - F2 * соs30 - RAС = 0' ||
				example3 === 'RAВ * соs30 - F2 * соs30 + F1 * соs60 - RAС = 0' ||
				example3 === '-RAС - F2 * соs30 + RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === '-RAС - F2 * соs30 + F1 * соs60 + RAВ * соs30 = 0' ||
				example3 === 'RAВ * соs30 + F1 * соs60 - RAС - F2 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 5 &&
			(example3 === 'F2 * соs30 + F1 * соs60 - RAС - RAВ * соs30 = 0' ||
				example3 === 'F1 * соs60 + F2 * соs30 - RAС - RAВ * соs30 = 0' ||
				example3 === 'F2 * соs30 - RAС - F1 * соs60 - RAВ * соs30 = 0' ||
				example3 === 'F1 * соs60 - RAС - F2 * соs30 - RAВ * соs30 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F1 * соs60 + F2 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 6 &&
			(example3 === 'RAВ + F2 * соs60 - F1 * соs30 - RAС * соs60 = 0' ||
				example3 === 'RAВ - F1 * соs30 - F2 * соs60 + RAС * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - F1 * соs30 - RAС * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - RAС * соs60 - F1 * соs30 = 0' ||
				example3 === 'RAВ - F1 * соs30 - RAС * соs60 - F2 * соs60 = 0' ||
				example3 === 'RAВ + F2 * соs60 - RAС * соs60 - F1 * соs30 = 0' ||
				example3 === '-RAС - RAВ * соs60 - F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '-RAС - RAВ * соs60 - F2 * соs30 - F1 * соs60 = 0' ||
				example3 === '-RAС - F2 * соs30 - RAВ * соs60 + F1 * соs60 = 0' ||
				example3 === '-RAС - F2 * соs30 - F1 * соs60 - RAВ * соs60 = 0' ||
				example3 === '-RAС - F1 * соs30 - RAВ * соs60 - F2 * соs60 = 0' ||
				example3 === '-RAС - F1 * соs30 - F2 * соs60 - RAВ * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 7 &&
			(example3 === '- RAС - RAВ * соs60 - F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAС - F2 * соs30 + F1 * соs60 - RAВ * соs60 = 0' ||
				example3 === '- RAС - F2 * соs30 - RAВ * соs60 + F1 * соs60 = 0' ||
				example3 === '- RAС + F1 * соs60 - F2 * соs30 - RAВ * соs60 = 0' ||
				example3 === '- RAС + F1 * соs60 - RAВ * соs60 - F2 * соs30 = 0' ||
				example3 === '- RAС - RAВ * соs60 - F2 * соs30 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 8 &&
			(example3 === 'F2 * соs30 - F1 * соs60 - RAС - RAВ * соs30 = 0' ||
				example3 === 'F1 * соs60 - F2 * соs30 - RAВ * соs30 - RAС = 0' ||
				example3 === '- RAС - RAВ * соs30 - F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F2 * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAВ * соs30 - RAС + F1 * соs60 + F2 * соs30 = 0' ||
				example3 === 'F2 * соs30 - F1 * соs60 - RAВ * соs30 - RAС = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 9 &&
			(example3 === 'RAВ * соs60 - F1 * соs30 - RAС - F2 * соs60 = 0' ||
				example3 === 'RAВ * соs60 - RAС - F1 * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAВ * соs60 - RAС - F2 * соs60 - F1 * соs30 = 0' ||
				example3 === 'RAВ * соs60 - F2 * соs60 - RAС - F1 * соs30 = 0' ||
				example3 === 'RAВ * соs60 - F2 * соs60 - F1 * соs30 - RAС = 0' ||
				example3 === 'RAВ * соs60 - RAС - F2 * соs60 - F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		}
		if (
			activeIndexOfKronshteinImg === 10 &&
			(example3 === 'RAВ + RAС * соs60 + F1 * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAВ + RAС * соs60 - F2 * соs60 + F1 * соs30 = 0' ||
				example3 === 'RAВ + F1 * соs30 - F2 * соs60 - RAС * соs60 = 0' ||
				example3 === 'RAВ + F1 * соs30 - RAС * соs60 - F2 * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 + F1 * соs30 - RAС * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - RAС * соs60 + F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 11 &&
			(example3 === 'RAВ + RAС * соs60 - F1 * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAВ + RAС * соs60 - F2 * соs60 - F1 * соs30 = 0' ||
				example3 === 'RAВ + F1 * соs30 - F2 * соs60 - RAС * соs60 = 0' ||
				example3 === 'RAВ + F1 * соs30 - RAС * соs60 - F2 * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - F1 * соs30 - RAС * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - RAС * соs60 - F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 12 &&
			(example3 === 'RAВ + RAС * соs60 - F1 * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAВ + RAС * соs60 - F2 * соs60 - F1 * соs30 = 0' ||
				example3 === 'RAВ + F1 * соs30 - F2 * соs60 - RAС * соs60 = 0' ||
				example3 === 'RAВ + F1 * соs30 - RAС * соs60 - F2 * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - F1 * соs30 - RAС * соs60 = 0' ||
				example3 === 'RAВ - F2 * соs60 - RAС * соs60 - F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 13 &&
			(example3 === 'RAС + RAВ * соs30 - F1 * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAС + RAВ * соs30 - F2 * соs60 - F1 * соs30 = 0' ||
				example3 === 'RAС + F1 * соs30 - F2 * соs60 - RAВ * соs30 = 0' ||
				example3 === 'RAС + F1 * соs30 - RAВ * соs30 - F2 * соs60 = 0' ||
				example3 === 'RAС - F2 * соs60 - F1 * соs30 - RAВ * соs30 = 0' ||
				example3 === 'RAС - F2 * соs60 - RAВ * соs30 - F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 14 &&
			(example3 === '- RAС - F1 * соs60 + RAВ * соs60 + F2 * соs30 = 0' ||
				example3 === '- RAС - F1 * соs60 + F2 * соs30 + RAВ * соs60 = 0' ||
				example3 === '- RAС + RAВ * соs60 + F2 * соs30 - F1 * соs60 = 0' ||
				example3 === '- RAС + RAВ * соs60 - F1 * соs60 + F2 * соs30 = 0' ||
				example3 === '- F2 * соs30 - RAС + F1 * соs60 + RAВ * соs60 = 0' ||
				example3 === '- F2 * соs30 - RAС + RAВ * соs60 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 15 &&
			(example3 === 'RAВ * соs45 + F1 * соs60 - RAС * соs45 - F2 = 0' ||
				example3 === 'RAВ * соs45 - F2 + F1 * соs60 - RAС * соs45 = 0' ||
				example3 === 'RAВ * соs45 + F1 * соs60 - F2 - RAС * соs45 = 0' ||
				example3 === 'RAВ * соs45 - F2 - RAС * соs45 + F1 * соs60 = 0' ||
				example3 === 'F1 * соs60 + RAВ * соs45 - RAС * соs45 - F2 = 0' ||
				example3 === 'F1 * соs60 - F2 + RAВ * соs45 - RAС * соs45 = 0' ||
				example3 === 'F1 * соs60 + RAВ * соs45 - F2 - RAС * соs45 = 0' ||
				example3 === 'F1 * соs60 - F2 - RAС * соs45 + RAВ * соs45 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 16 &&
			(example3 === '- RAС - RAВ * соs30 + F1 * соs30 + F2 * соs60 = 0' ||
				example3 === '- RAС - F2 * соs30 + F1 * соs30 + RAВ * соs60 = 0' ||
				example3 === '- RAС - RAВ * соs30 + F2 * соs60 + F1 * соs30 = 0' ||
				example3 === '- RAС - F2 * соs30 + RAВ * соs60 + F1 * соs30 = 0' ||
				example3 === '- F2 * соs30 - RAС + F1 * соs30 + RAВ * соs60 = 0' ||
				example3 === '- F2 * соs30 - RAС + RAВ * соs60 + F1 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 17 &&
			(example3 === '- RAС - F2 * соs30 + RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAС - F2 * соs30 + F1 * соs60 + RAВ * соs30 = 0' ||
				example3 === '- RAС - RAВ * соs30 + RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === '- RAС - RAВ * соs30 + F1 * соs60 + RAВ * соs30 = 0' ||
				example3 === '- F2 * соs30 - RAС + F1 * соs60 + RAВ * соs30 = 0' ||
				example3 === '- F2 * соs30 - RAС + RAВ * соs30 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 18 &&
			(example3 === 'F1 + F2 * соs60 - RAС * соs30 - RAВ * соs30 = 0' ||
				example3 === 'F1 - RAС * соs30 + F2 * соs60 - RAВ * соs30 = 0' ||
				example3 === 'F1 + F2 * соs60 - RAВ * соs30 - RAС * соs30 = 0' ||
				example3 === 'F1 - RAВ * соs30 + F2 * соs60 - RAС * соs30 = 0' ||
				example3 === '- RAС * соs30 + F1 + F2 * соs60 - RAВ * соs30 = 0' ||
				example3 === '- RAС * соs30 + F1 - RAВ * соs30 + F2 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 19 &&
			(example3 === 'RAС + F1 * соs30 + F2 * соs60 - RAВ * соs60 = 0' ||
				example3 === 'RAС + F1 * соs30 - RAВ * соs60 + F2 * соs60 = 0' ||
				example3 === 'RAС + F2 * соs60 + F1 * соs30 - RAВ * соs60 = 0' ||
				example3 === 'RAС + F2 * соs60 - RAВ * соs60 + F1 * соs30 = 0' ||
				example3 === 'F1 * соs30 + RAС + F2 * соs60 - RAВ * соs60 = 0' ||
				example3 === 'F1 * соs30 + RAС - RAВ * соs60 + F2 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 20 &&
			(example3 === 'F2 + RAВ * соs60 - RAС * соs60 - F1 * соs60 = 0' ||
				example3 === 'F2 - F1 * соs60 + RAВ * соs60 - RAС * соs60 = 0' ||
				example3 === 'F2 + RAВ * соs60 - F1 * соs60 - RAС * соs60 = 0' ||
				example3 === 'F2 - RAС * соs60 + RAВ * соs60 - F1 * соs60 = 0' ||
				example3 === '- RAС * соs60 + F2 + RAВ * соs60 - F1 * соs60 = 0' ||
				example3 === '- RAС * соs60 + F2 - F1 * соs60 + RAВ * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 21 &&
			(example3 === 'RAВ * соs60 - RAС * соs30 - F1 = 0' ||
				example3 === 'RAВ * соs60 - F1 - RAС * соs30 = 0' ||
				example3 === 'RAВ * соs60 - RAС * соs30 + F1 = 0' ||
				example3 === 'RAВ * соs60 + F1 - RAС * соs30 = 0' ||
				example3 === '- RAС * соs30 + RAВ * соs60 - F1 = 0' ||
				example3 === '- RAС * соs30 - F1 + RAВ * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 22 &&
			(example3 === 'F1 + RAВ * соs45 - RAС * соs45 = 0' ||
				example3 === 'F1 - RAС * соs45 + RAВ * соs45 = 0' ||
				example3 === 'RAВ * соs45 + F1 - RAС * соs45 = 0' ||
				example3 === '- RAС * соs45 + F1 + RAВ * соs45 = 0' ||
				example3 === 'RAВ * соs45 - RAС * соs45 + F1 = 0' ||
				example3 === '- RAС * соs45 + RAВ * соs45 + F1 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 23 &&
			(example3 === 'F2 - RAС * соs30 - F1 * соs60 = 0' ||
				example3 === 'F2 - F1 * соs60 - RAС * соs30 = 0' ||
				example3 === 'F2 - RAС * соs30 - RAВ * соs60 = 0' ||
				example3 === 'F2 - RAВ * соs60 - RAС * соs30 = 0' ||
				example3 === '- RAС * соs30 - F1 * соs60 + F2 = 0' ||
				example3 === '- RAС * соs30 - RAВ * соs60 + F2 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 24 &&
			(example3 === '-RAС - RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === '-RAС - RAВ * соs30 + F1 * соs60 = 0' ||
				example3 === 'F1 * соs60 + F1 * соs60 - RAВ * соs30 - RAС = 0' ||
				example3 === 'F1 * соs60 + F1 * соs60 - RAВ * соs30 - RAС = 0' ||
				example3 === '-RAС - RAВ * соs30 + F1 * соs60 + F1 * соs60 = 0' ||
				example3 === '-RAС - RAВ * соs30 + F1 * соs60 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 25 &&
			(example3 === 'RAС + RAВ * соs45 + F1 * соs45 - F2 * соs 75° = 0' ||
				example3 === 'RAС + RAВ * соs45 + F1 * соs45 - F2 * соs75° = 0' ||
				example3 ===
					'F1 * соs45 + F1 * соs45 - F2 * соs75° + RAВ * соs45 = 0' ||
				example3 ===
					'F1 * соs45 + F1 * соs45 - F2 * соs 75° + RAВ * соs45 = 0' ||
				example3 === 'RAС + RAВ * соs45 + F1 * соs45 - F2 * соs 75° = 0' ||
				example3 === 'RAС + RAВ * соs45 + F1 * соs45 - F2 * соs75° = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 26 &&
			(example3 === 'F2 + RAВ * соs60 - F1 * соs60 = 0' ||
				example3 === 'F2 - F1 * соs60 + RAВ * соs60 = 0' ||
				example3 === 'F2 + RAВ * соs60 - F1 * соs60 = 0' ||
				example3 === 'F2 - F1 * соs60 + RAВ * соs60 = 0' ||
				example3 === 'F2 + RAВ * соs60 - F1 * соs60 + F1 * соs60 = 0' ||
				example3 === 'F2 - F1 * соs60 + RAВ * соs60 + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 27 &&
			(example3 === 'RAВ * соs45 - F2 * соs45 - RAС = 0' ||
				example3 === 'RAВ * соs45 - F2 * соs45 - RAС = 0' ||
				example3 === 'RAВ * соs45 - RAС - F2 * соs45 = 0' ||
				example3 === 'RAВ * соs45 - RAС - F2 * соs45 = 0' ||
				example3 === '-RAС - F2 * соs45 + RAВ * соs45 = 0' ||
				example3 === '-RAС - F2 * соs45 + RAВ * соs45 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 28 &&
			(example3 === 'F1 + RAВ * соs - RAС * соs60 = 0' ||
				example3 === 'F1 * соs - RAС * соs60 + RAВ = 0' ||
				example3 === 'F1 + RAВ * соs - RAС * соs60 = 0' ||
				example3 === 'F1 * соs - RAС * соs60 + RAВ = 0' ||
				example3 === 'F1 + RAВ * соs - RAС * соs60 + F1 * соs60 = 0' ||
				example3 === 'F1 * соs - RAС * соs60 + RAВ + F1 * соs60 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 29 &&
			(example3 === 'RAС + F1 * соs60 - RAВ * соs60 - F2 * соs30 = 0' ||
				example3 === 'RAС + F1 * соs60 - RAВ * соs60 - F2 * соs30 = 0' ||
				example3 === 'F1 * соs60 - F2 * соs30 + RAВ * соs60 - RAС = 0' ||
				example3 === 'F1 * соs60 - F2 * соs30 + RAВ * соs60 - RAС = 0' ||
				example3 === 'RAС + F1 * соs60 - RAВ * соs60 - F2 * соs30 = 0' ||
				example3 === 'RAС + F1 * соs60 - RAВ * соs60 - F2 * соs30 = 0')
		) {
			setIsRightExample3(true)

			if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
				setIsNeedToShowValueToExample3(true)
			}
		} else if (
			activeIndexOfKronshteinImg === 30 &&
			(example3 === 'RAВ * соs30 - RAС * соs45 - F1 = 0' ||
				example3 === 'RAВ * соs30 - F1 - RAС * соs45 = 0' ||
				example3 === 'RAВ * соs30 - RAС * соs45 + F1 = 0' ||
				example3 === 'RAВ * соs30 - F1 + RAС * соs45 = 0' ||
				example3 === 'RAВ * соs30 - RAС * соs45 - F1 = 0' ||
				example3 === 'RAВ * соs30 - F1 - RAС * соs45 = 0')
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
								<p>F1 ={f1}</p>
								<p>F2 = {f2}</p>
								<p>
									Rab -{' '}
									{solutionValueToExample1 && isNeedToShowValueToExample1
										? solutionValueToExample1
										: '?'}
									, Rac -{' '}
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
								placeholder='Н: RAВ + F2...'
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
							Rab -{' '}
							{solutionValueToExample1 && isNeedToShowValueToExample1
								? solutionValueToExample1 + 'kH'
								: '?'}
							<p>
								(2), ΣFi<sub>y</sub> = 0
							</p>
							<input
								type='text'
								placeholder='Н: RAВ + F2...'
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
							Rac -{' '}
							{solutionValueToExample2 && isNeedToShowValueToExample2 + 'kH'
								? solutionValueToExample2 + 'kH'
								: '?'}
							<p>
								(3), ΣFi<sub>x'</sub> = 0
							</p>
							<input
								type='text'
								placeholder='Н: RAВ + F2...'
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
								? `Відповідь: Rab = ${solutionValueToExample1}kH, RAС = ${solutionValueToExample2}kH`
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
