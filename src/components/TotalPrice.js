const TotalPrice = ({cart}) => {
    const stylesheet = {
        textAlign:'center',
        fontWeight:500,
        fontSize:30,
        borderTop:'1px solid #333',
        padding:'15px 0',
        margin:'10px 0'
    }

    function calculateTotalPrice(){
        let total = 0;

        cart.forEach(function(product){
            const totalPriceForItem = product.quantity * product.price;
            total += totalPriceForItem
        })

        return total
    }
  return (
    <div style={stylesheet}>Final price: {calculateTotalPrice()} &#36; </div>
  )
}

export default TotalPrice