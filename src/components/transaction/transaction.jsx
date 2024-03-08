
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
            {items.map((item) => {
                return(
                <tbody key={item.id}>
                    <tr>
                        <td className={css.item}>{item.type }</td>
                        <td className={css.item}>{item.amount }</td>
                        <td className={css.item}>{item.currency }</td>
                    </tr>
                </tbody>
            )}
        
            )}
       
    
</table>
   
)}

export default TransactionHistory;