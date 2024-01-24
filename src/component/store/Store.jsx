import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStoreModal from './AddStoreModal'
import ModalUpdateStore from './ModalUpdateStore'

function Store() {
    const [storeData, setStoreData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [selectedStore, setSelectedStore] = useState(null)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleOpenModalUpdate = () => {
        setShowModalUpdate(true)
    }

    const handleCloseModalUpdate = () => {
        setShowModalUpdate(false)
    }

    const handleCreateStore = async (newStore) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/store', newStore)
            console.log('New Store : ', response.data)
            window.alert('Successfully created store')
        } catch (error) {
            console.error('Error Creating Store : ', error.message)
            window.alert('Error Creating store. Please try again')
        }
        handleCloseModal()
    }

    useEffect(() => {
        const fetchStoreData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth/store')
                setStoreData(response.data)
                localStorage.setItem('stores', JSON.stringify(response.data))

            } catch (error) {
                console.error('Error fetching store data:', error)
            }
        }

        fetchStoreData()
    }, [])

    const handleDelete = async (storeId) => {
        try {
            const shouldDelete = window.confirm('Are you sure you want to delete this store?')

            if (shouldDelete) {
                const response = await axios.delete(`http://localhost:8080/api/auth/store/${storeId}`)
                window.alert('Store deleted successfully')
                console.log('Store delete : ', response.data)

                const updatedStores = storeData.filter((store) => store.id !== storeId)
                setStoreData(updatedStores)

                const stores = JSON.parse(localStorage.getItem("stores")) || []

                const storeIndex = stores.findIndex((store) => store.id === storeId)

                if (storeIndex !== -1) {
                    stores.splice(storeIndex, 1)
                    localStorage.setItem("stores", JSON.stringify(stores))
                }
            } else {
                window.alert('Store deletion canceled')
            }
        } catch (error) {
            window.alert('Error deleting store. Please try again later')
        }
    }

    const handleUpdateStore = (updatedStore) => {
        const updatedStores = storeData.map((store) =>
            store.id === updatedStore.id ? updatedStore : store
        )
        setStoreData(updatedStores)

        const storedStores = JSON.parse(localStorage.getItem('stores')) || []
        const updatedStoredStores = storedStores.map((store) =>
            store.id === updatedStore.id ? updatedStore : store
        )
        localStorage.setItem('stores', JSON.stringify(updatedStoredStores))
    }

    const handleEdit = (store) => {
        setSelectedStore(store)
        handleOpenModalUpdate()
    }

    return (
        <>
            <div className='container mt-5 mb-4' style={{ paddingTop: "20px" }}>
                <button className='btn btn-primary' onClick={handleOpenModal}>Add</button>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">No Siup</th>
                            <th scope="col">Store Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeData.map((store, index) => (
                            <tr key={store.id}>
                                <th>{index + 1}</th>
                                <td>{store.noSiup}</td>
                                <td>{store.storeName}</td>
                                <td>{store.address}</td>
                                <td>{store.phone}</td>
                                <td>
                                    <div className="btn btn-danger mx-2" onClick={() => handleDelete(store.id)}>Delete</div>
                                    <div className="btn btn-success" onClick={() => handleEdit(store)}>Edit</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddStoreModal
                show={showModal}
                handleClose={handleCloseModal}
                handleCreateStore={handleCreateStore}
            />
            <ModalUpdateStore
                show={showModalUpdate}
                handleClose={handleCloseModalUpdate}
                handleUpdateStore={handleUpdateStore}
                initialData={selectedStore}
            />
        </>
    )
}

export default Store