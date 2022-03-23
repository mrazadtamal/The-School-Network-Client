import React, { useEffect, useState } from 'react'

import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBooks, GetAllLendBooks } from '../../SchoolRedux/TeacherSlice';

const BookAnalytics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(GetAllBooks())
  },[dispatch])
  useEffect(() => {
    dispatch(GetAllLendBooks())
  },[dispatch])
  const LendedBooks = useSelector((state) => state.teacherStore.AllLendBook);

  const Books = useSelector((state) => state.teacherStore.Books);

  let totalbooks = 0
  for(const book of Books){
    totalbooks = totalbooks + parseInt(book.availableBook)
  }
  const history = Books?.find(book => book?.category === 'History');
  const story = Books?.find(book => book?.category === 'Story');
  const Rhymes = Books?.find(book => book?.category === 'Rhymes');
  const GK = Books?.find(book => book?.category === 'General Knowledge');
  const Word = Books?.find(book => book?.category === 'Word Book');
  const Drawing = Books?.find(book => book?.category === 'Drawing');

  const data = { series: [{
    data: [totalbooks, LendedBooks?.length,  history?.availableBook, story?.availableBook, Rhymes?.availableBook, GK?.availableBook, Word?.availableBook, Drawing?.availableBook]
  }],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
    xaxis: {
      categories: [
        ['Total', 'Books'],
        ['Total', 'LendedBooks'],
        ['History', 'Books'],
        ['Story', 'Books'],
        ['Rhymes', 'Books'], 
        ['General', 'Knowledge Books'],
        ['Word', 'Book'],
        ['Drawing', 'Book']
      ],
      labels: {
        style: {
          colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',],
          fontSize: '12px'
        }
      }
    }
  },}
  return (
    <div>
      <h1 className='text-center text-3xl text-blue-900 my-8 font-bold'>The School Network Library Analytics</h1>
      <Chart   options={data.options} series={data.series} type="bar" height={500} width={800}>
      </Chart >
    </div>
  )
}

export default BookAnalytics
