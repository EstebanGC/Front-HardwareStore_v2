export default function AddProduct() {
    return (
        <div>
            <form className="form" id='addProdct'>
                <label>Product name</label>
                <input type='text' id='name' />
                <label>Description</label>
                <input type='text' id='description' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}