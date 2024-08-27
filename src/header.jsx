function Header(){
    return(
        <>
        {/* put bg a image */}
        <div className="bg-[url('assets/img/backgroundheader.png')] bg-no-repeat bg-cover bg-center flex-row h-[500px]">
        <div className="pt-20 font-ui">
        <h1 className="text-center text-[100px]">Hello World,</h1>
        <h1 className="text-center text-[50px]">welcome</h1>
        </div>
        </div>
        </>
    )
}

export default Header