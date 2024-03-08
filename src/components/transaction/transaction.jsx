import TransactionItems from './transactionItems/transactionItems'
import css from './transaction.module.css'

function TransactionHistory({items}) {
    return (
      <table className={css.container}>
        <thead>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return <TransactionItems item={item} key={item.id} />
                  
            })}
          </tbody>
        </table>
   
)}

export default TransactionHistory;