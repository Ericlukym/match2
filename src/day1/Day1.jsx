import { useState, useEffect } from 'react'
import { Table, Select, Divider, Input, Tag, Slider  } from "antd"
import { sTeam, hkTeam } from "../data/member"
import { Link } from "react-router-dom";

import '../common.styles.css'
const Day1 = () => {
  const [search, setSearch] =useState('');
  const [ movRange, setrange ] = useState([10, 90])
  const [ hkTeamSelected, setHkTeamSelected ] = useState([false, false, false, false, false])
  const [ hkTeamSelection, setHkTeamSelection ] = useState(['', '', '', '', ''])
  const [ sTeamSelection, setSTeamSelection ] = useState(['', '', '', '', '', '', '', '', '', ''])
  const combo=[]
  let counter=0
  for (let i=0; i<sTeam.length; i++)
      for (let j=i+1; j<sTeam.length; j++) {
          combo.push({id: counter, player1: sTeam[i].name, player2: sTeam[j].name, 
          hcp: sTeam[i].hcp+sTeam[j].hcp,
          hkTeam1: 'Berry + Eric',
          mov1: (1/(1 + Math.pow(10, (37 - sTeam[i].hcp - sTeam[j].hcp )/30))).toFixed(4),            
      
          hkTeam2: 'Johnny + Kelvin',
          mov2: (1/(1 + Math.pow(10, (37 - sTeam[i].hcp - sTeam[j].hcp)/30))).toFixed(4),
          
          hkTeam3: 'Tomkys + Kenneth',
          mov3: (1/(1 + Math.pow(10, (48 - sTeam[i].hcp - sTeam[j].hcp)/30))).toFixed(4),

          hkTeam4: 'Jonathan + Neil',
          mov4: (1/(1 + Math.pow(10, (48 - sTeam[i].hcp - sTeam[j].hcp)/30))).toFixed(4),
          
          hkTeam5: 'Gary + Henry',
          mov5: (1/(1 + Math.pow(10, (45 - sTeam[i].hcp - sTeam[j].hcp)/30))).toFixed(4),
      
          })
          ++counter
      }
  const [ data, setData ] = useState(combo)

  const marks = {
    25: {
      style: {color: '#d4380d'},
      label:<strong>25%</strong>
    },
    40: '40%',
    60: {
      style: {color: '#008000'},
      label:<strong>60%</strong>
    },
  }

  const columns = [
    {
    title: 'Player 1',
    dataIndex: 'player1',
    key: 'player1',
    width: 120
    },
    {
    title: 'Player 2',
    dataIndex: 'player2',
    key: 'player2',
    width: 120
    },
    {
    title: 'hcp',
    dataIndex: 'hcp',
    key: 'hcp',
    width: 60,
    render: ( _,record) => (
        <>{record.hcp.toFixed(1)}</>
      ),
    },
    {
        title: 'HK Team 1',
        dataIndex: 'hkTeam1',
        key: 'hkTeam1',
        width: 120,
        render: ( _,record) => {
          if (hkTeamSelected[0])
            return <div>--</div>  
          if (record.mov1*100 >= movRange[0] && record.mov1*100 <= movRange[1])
             return <div className='name-tag'>{record.hkTeam1}</div>
          else 
            return <div>--</div>  
        },
    },
    {
        title: 'MOV',
        dataIndex: 'mov1',
        key: 'mov1',
        width: 70,
        render: ( _,record) => {
          if (hkTeamSelected[0])
            return <div>--</div> 

          return <div className='mov-tag'>{(record.mov1*100).toFixed(2)}%</div>
        },
    },
    {
        title: 'HK Team 2',
        dataIndex: 'hkTeam2',
        key: 'hkTeam2',
        width: 120,
        render: ( _,record) => {
          if (record.mov2*100 >= movRange[0] && record.mov2*100 <= movRange[1])
             return <div className='name-tag'>{record.hkTeam2}</div>
          else 
            return <div>--</div>  
        },
    },
    {
        title: 'MOV',
        dataIndex: 'mov2',
        key: 'mov2',
        width: 70,
        render: ( _,record) => (
          <div className='mov-tag'>{(record.mov2*100).toFixed(2)}%</div>
        ),
    },
    {
        title: 'HK Team 3',
        dataIndex: 'hkTeam3',
        key: 'hkTeam3',
        width: 150,
        render: ( _,record) => {
          if (record.mov3*100 >= movRange[0] && record.mov3*100 <= movRange[1])
             return <div className='name-tag'>{record.hkTeam3}</div>
          else 
            return <div>--</div>  
        },
    },
    {
        title: 'MOV',
        dataIndex: 'mov3',
        key: 'mov3',
        width: 70,
        render: ( _,record) => (
          <div className='mov-tag'>{(record.mov3*100).toFixed(2)}%</div>
        ),
    },
    {
        title: 'HK Team 4',
        dataIndex: 'hkTeam4',
        key: 'hkTeam4',
        width: 120,
        render: ( _,record) => {
          if (record.mov4*100 >= movRange[0] && record.mov4*100 <= movRange[1])
             return <div className='name-tag'>{record.hkTeam4}</div>
          else 
            return <div>--</div>  
        },
    },
    {
        title: 'MOV',
        dataIndex: 'mov4',
        key: 'mov4',
        width: 70,
        render: ( _,record) => (
          <div className='mov-tag'>{(record.mov4*100).toFixed(2)}%</div>
        ),
    },
    {
        title: 'HK Team 5',
        dataIndex: 'hkTeam5',
        key: 'hkTeam5',
        width: 120,
        render: ( _,record) => {
          if (record.mov5*100 >= movRange[0] && record.mov5*100 <= movRange[1])
             return <div className='name-tag'>{record.hkTeam5}</div>
          else 
            return <div>--</div>  
        },
    },
    {
        title: 'MOV',
        dataIndex: 'mov5',
        key: 'mov5',
        width: 70,
        render: ( _,record) => (
          <div className='mov-tag'>{(record.mov5*100).toFixed(2)}%</div>
        ),
    },
  ]
    
  const options = [{value: '', label: <div style={{opacity: '0.3'}}>Singapore Player</div>}]
  sTeam.map(member => (
      options.push({value: member.name, label: member.name})))

  const hkOptions = [
    {
      value: '',
      label: <div style={{opacity: '0.3'}}>HK Team</div>
    },
    {
        value: hkTeam[3].name + ' + ' + hkTeam[9].name,
        label: hkTeam[3].name + ' + ' + hkTeam[9].name
    },
    {
        value: hkTeam[4].name + ' + ' + hkTeam[5].name,
        label: hkTeam[4].name + ' + ' + hkTeam[5].name
    },
    {
        value: hkTeam[0].name + ' + ' + hkTeam[1].name,
        label: hkTeam[0].name + ' + ' + hkTeam[1].name
    },
    {
        value: hkTeam[6].name + ' + ' + hkTeam[7].name,
        label: hkTeam[6].name + ' + ' + hkTeam[7].name
    },
    {
        value: hkTeam[8].name + ' + ' + hkTeam[2].name,
        label: hkTeam[8].name + ' + ' + hkTeam[2].name
    },
      
  ]
    
  const onChangeSearch = e => {
    if (e.target.value.length>30)
      return
  
    setSearch(e.target.value);

  }

  const handleChangeSlider = (value) => {
    console.log(value)
    setrange(value)
  }

  const handleChangeSelect = (id, value) => {
    const newValue = [...hkTeamSelection]
    newValue[id]=value
    setHkTeamSelection(newValue)
    
  }

  const handleChangeSTeam = (id, value) => {
    const newValue = [ ...sTeamSelection]
    newValue[id] = value
    setSTeamSelection(newValue)
  }

  const handleClearAll = () => {
    setHkTeamSelection(['', '', '', '', ''])
    setSTeamSelection(['', '', '', '', '', '', '', '', '', ''])
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setData(combo
        .filter (c => (
          !sTeamSelection.includes(c.player1) 
          && !sTeamSelection.includes(c.player2)
          && (JSON.stringify(c.player1).toLowerCase().includes(search.toLowerCase()) 
          || JSON.stringify(c.player2).toLowerCase().includes(search.toLowerCase())
          )  
        ) 
      )
    )}, 400)

    return () => clearTimeout(delayDebounceFn)
  }, [search, sTeamSelection])              

  useEffect(()=> {
    let newValue = [...hkTeamSelected]
    for (let i=0; i<hkTeamSelection.length; i++) {
      console.log(hkTeamSelection[i], hkTeam[3].name + ' + ' + hkTeam[9].name)
      if (hkTeamSelection[i]===hkTeam[3].name + ' + ' + hkTeam[9].name) {
        console.log('true')
        newValue[0]=true
      } 
    }
    console.log('----', newValue)
    setHkTeamSelected(newValue)

  }, [hkTeamSelection])

  useEffect(()=> {
    console.log('>>>', hkTeamSelected)
  },[hkTeamSelected])

  return (
    <div className="container">
        <div className='nav'>
          <div className='nav-active'>Day 1</div>
          <div className='nav-inactive'><Link to='/match/day2'>Day 2</Link></div>
          <div className='nav-inactive'><Link to='/match/day3'>Day 3</Link></div>
        </div>
    <div className='match-box'>
        <div className='team-box'>
            <div className='game-label'>
                Match 1: 
            </div>
            <div className="player1" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 1'
                options={options}
                value={sTeamSelection[0]}
                onChange={(value)=>handleChangeSTeam(0, value)}
            />
            </div>
            <span className='mid-label'>+</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 2'
                options={options}
                value={sTeamSelection[1]}
                onChange={(value)=>handleChangeSTeam(1, value)}
            />
            </div>
            <span className='mid-label'>VS</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='HK Team'
                options={hkOptions}
                value={hkTeamSelection[0]}
                onChange={(value)=>handleChangeSelect(0, value)}
            />
            </div>
            <div className='btn-group'>
              <button className='btn btn-select'>Select</button>
            </div>
        </div>

        <div className='team-box'>
            <div className='game-label'>
                Match 2: 
            </div>
            <div className="player1" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 1'
                options={options}
                value={sTeamSelection[2]}
                onChange={(value)=>handleChangeSTeam(2, value)}
            />
            </div>
            <span className='mid-label'>+</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 2'
                options={options}
                value={sTeamSelection[3]}
                onChange={(value)=>handleChangeSTeam(3, value)}
            />
            </div>
            <span className='mid-label'>VS</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='HK Team'
                options={hkOptions}
                value={hkTeamSelection[1]}
                onChange={(value)=>handleChangeSelect(1, value)}
            />
            </div>
            <div className='btn-group'>
              <button className='btn btn-select' >Select</button>
            </div>
        </div>


        <div className='team-box'>
            <div className='game-label'>
                Match 3: 
            </div>
            <div className="player1" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 1'
                options={options}
                value={sTeamSelection[4]}
                onChange={(value)=>handleChangeSTeam(4, value)}
            />
            </div>
            <span className='mid-label'>+</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 2'
                options={options}
                value={sTeamSelection[5]}
                onChange={(value)=>handleChangeSTeam(5, value)}
            />
            </div>
            <span className='mid-label'>VS</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='HK Team'
                options={hkOptions}
                value={hkTeamSelection[2]}
                onChange={(value)=>handleChangeSelect(2, value)}
            />
            </div>
            <div className='btn-group'>
              <button className='btn btn-select'>Select</button>
            </div>
        </div>

        <div className='team-box'>
            <div className='game-label'>
                Match 4: 
            </div>
            <div className="player1" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 1'
                options={options}
                value={sTeamSelection[6]}
                onChange={(value)=>handleChangeSTeam(6, value)}
            />
            </div>
            <span className='mid-label'>+</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 2'
                options={options}
                value={sTeamSelection[7]}
                onChange={(value)=>handleChangeSTeam(7, value)}
            />
            </div>
            <span className='mid-label'>VS</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='HK Team'
                options={hkOptions}
                value={hkTeamSelection[3]}
                onChange={(value)=>handleChangeSelect(3, value)}
            />
            </div>
            <div className='btn-group'>
              <button className='btn btn-select'>Select</button>
            </div>
        </div>

        <div className='team-box'>
            <div className='game-label'>
                Match 5: 
            </div>
            <div className="player1" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 1'
                options={options}
                value={sTeamSelection[8]}
                onChange={(value)=>handleChangeSTeam(8, value)}
            />
            </div>
            <span className='mid-label'>+</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='Singapore Player 2'
                options={options}
                value={sTeamSelection[9]}
                onChange={(value)=>handleChangeSTeam(9, value)}
            />
            </div>
            <span className='mid-label'>VS</span>
            <div className="player2" >
            <Select
                showSearch 
                style={{width:200}}
                placeholder='HK Team'
                options={hkOptions}
                value={hkTeamSelection[4]}
                onChange={(value)=>handleChangeSelect(4, value)}
            />
            </div>
            <div className='btn-group'>
              <button className='btn btn-select'>Select</button>
            </div>

            <div className='btn-right'>
              <button className='btn btn-clear-all' onClick={handleClearAll}>Clear All</button>
            </div>
        </div>
        </div>
    {/* <Divider /> */}
    <div className='filter-box'>
      <Input className='search-box' onChange={onChangeSearch} type='text' value={search} placeholder="Search ... " />
      <span className='slider-label'>MOV (in %): </span>
      <Slider marks={marks} className='slider-box' range defaultValue={[0, 100]} value={movRange} onChange={handleChangeSlider}/>
      <span className='total-label'>Total: </span>
      <span className='total-box'>{data.length}</span>
    </div>
    <Table 
        className="table-striped-rows"
        dataSource={data} columns={columns} 
        rowKey="id"
        size="middle"
        //rowKey={({ record }) => console.log(record)} 
    />
    </div>
  )
}

export default Day1