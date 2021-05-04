import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Popconfirm, Radio } from 'antd';
import { loadData, selectAllBurgers } from '../../features/allBurgers/allBurgersSlice';
import { AdminDrawer } from './AdminDrawer';
  




  export const AdminTable = () => {
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
        console.log("loadData");
    }
    useEffect(onFirstRender, [])

    const allItems = useSelector(selectAllBurgers)

    const [visible, setVisible] = useState(false);
    const showRecord = (record) => {
        setRecord(record)
        setShowDrawer(true);
    };
    

    const [record, setRecord] = useState({});
    const [showDrawer, setShowDrawer] = useState(false);

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Radio.Group>
                
                <Radio.Button onClick={() => showRecord(record)}>
                  Edit
                </Radio.Button>
                
                <Popconfirm title="Are you sure？" onConfirm = {() => console.log("deleting..." + JSON.stringify(record))} okText="Yes" cancelText="No">
                <Radio.Button>
                  Delete
                </Radio.Button>
                </Popconfirm>
              </Radio.Group>
            ),
          },
      ];

    return (
        <>
        <AdminDrawer
            showDrawer = {showDrawer}
            setShowDrawer = {setShowDrawer}
            record = {record}
            updateRecord = {(record) => console.log(record)}
        />
        {/*
        <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        >
        <p>{record.name}</p>
        <p>{record.price}</p>
        <p>{record.img}</p>
        </Drawer>
        */}
        <Table dataSource={allItems} columns={columns} 
        rowKey = {item => item.id}
        />
        </>
    )
  }