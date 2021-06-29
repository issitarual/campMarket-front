import { BsSearch, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

function Sidebar(){
    return(
        <>
            <div id="header">
                <ProSidebar width={"200px"}>
                    <SidebarHeader>
                        <Logo>CampMarket</Logo>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu>
                            <MenuItem icon={<FiHome />}>
                                Home
                                <Link to={"/"} />
                            </MenuItem>
                            <MenuItem icon={<FiShoppingCart />}>
                                Cart
                                <Link to={"/cart"} />
                            </MenuItem>
                            <MenuItem icon={<BsFillPersonFill />}>
                                Profile
                                <Link to={"/profile"} />
                            </MenuItem>
                            <SubMenu icon={<IoFastFoodSharp />} title="Products">
                                <MenuItem>
                                    <p>Vegetables</p>
                                    <Link to={"/vegetables"} />
                                </MenuItem>
                                <MenuItem>
                                    <p>Meat</p>
                                    <Link to={"/meat"} />
                                </MenuItem>
                                <MenuItem>
                                    <p>Cold Products</p>
                                    <Link to={"/cold"} />
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<BsSearch />}>
                                Search
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu>
                            <MenuItem icon={<BsBoxArrowRight />}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    )
}

const Logo = styled.div`
    display: flex;
    height: 60px;
    font-size: 20px;
    padding: 0 20px;
    color: #000;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(219, 219, 219);
`

export default Sidebar;