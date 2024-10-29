import { useState, useEffect } from 'react'
import { Table, Select, Divider, Input, Tag, Slider  } from "antd"
import { sTeam, hkTeam } from "../data/member"
import { Link } from "react-router-dom";

import '../common.styles.css'
const Day2 = () => {
  return (
    <div className='container'>
        <div className='nav'>
          <div className='nav-inactive'><Link to='/match/day1'>Day 1</Link></div>
          <div className='nav-active'>Day 2</div>
          <div className='nav-inactive'><Link to='/match/day3'>Day 3</Link></div>
        </div>
    </div>
  )
}

export default Day2