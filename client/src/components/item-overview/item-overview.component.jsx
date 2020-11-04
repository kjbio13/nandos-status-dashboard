import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils.js'
import ItemCard from '../item-card/item-card.component'

const ItemOverview = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await db.collection('items')
                .get()
                .then(snapshot => {

                    const items = [];

                    snapshot.forEach(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        items.push({id, ...data});
                    }
                    )
                    setItems(items)
                    console.log(items)
                })
                .catch(error => console.log(error))

        }
        fetchData()
    }, [])

    return (
        <>
            {items.map((item) =>

                <ItemCard key={item.id} props={item} />

            )}
        </>
    )
}

export default ItemOverview;