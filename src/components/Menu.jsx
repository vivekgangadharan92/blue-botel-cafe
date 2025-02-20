import { useEffect, useState } from 'react'
import data from "../data/menu.json"
import logo from "../images/logo.png"
const Menu = () => {
    const handleClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.currentTarget.getAttribute("data-target");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 350,
                behavior: "smooth",
            });
        }
    };
    const [keyword, setKeyWord] = useState('')
    const [filteredData, setFilteredData] = useState(data)

    function filterMenu(searchTerm) {
        searchTerm = searchTerm.toLowerCase();

        return data
            .map(category => {
                // Check if categoryName contains the search term
                const categoryMatch = category.categoryName.toLowerCase().includes(searchTerm);
                let matchingItems = category.items
                if (!categoryMatch) {
                    // Filter items where item name contains the search term
                    matchingItems = category.items.filter(item =>
                        item.name.toLowerCase().includes(searchTerm)
                    );
                }

                // If the category or any item matches, return filtered category
                if (categoryMatch || matchingItems.length > 0) {
                    return {
                        ...category,
                        items: matchingItems // Include only matched items
                    };
                }
                return null;
            })
            .filter(category => category !== null); // Remove null entries
    }


    useEffect(() => {
        const searchedData = filterMenu(keyword)
        setFilteredData(searchedData)
    }, [keyword])


    useEffect(() => {


        // Add event listeners
        const buttons = document.querySelectorAll(".menu-category-btn");
        buttons.forEach((btn) => btn.addEventListener("click", handleClick));

        // Cleanup event listeners on unmount
        return () => {
            buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
        };
    }, []);
    return (
        <div class="container my-4">
            <div class="img-container">
                <img src={logo} alt="Centered Image" />
            </div>
            <h2 class="text-center mb-3">Our Menu</h2>
            <div class="sticky-container">


                <div class="search-container my-3">
                    <input type="text" class="form-control search-input" placeholder="Search menu..." onChange={e => setKeyWord(e.target.value)} />
                    <span class="search-icon">🔍</span>
                </div>
                {/* // <button class="menu-category-btn" data-target={"#" + d.categoryId} onClick={e=>handleClick(e)}>{d.categoryName}</button> */}


                <div class="menu-scroll-container d-flex overflow-auto mb-3">
                    {filteredData.map(d => (

                        <div class="menu-item-container" data-target={"#" + d.categoryId} onClick={e => handleClick(e)}>
                            <div class="menu-item-image-wrapper">
                                <img src={d.image} alt="Mojitos" class="menu-item-image" />
                            </div>

                            <span class="menu-category-name" data-target="#mojitos">{d.categoryName}</span>
                        </div>
                    ))}

                </div>
            </div>

            <div id="menuItems">
                <div class="row">
                    {filteredData.map(d => (
                        <div class="col-12 col-md-6">
                            <div class="menu-section" id={d.categoryId}>
                                <h3 class="section-title">{d.categoryName}</h3>
                                <div class="menu-list">
                                    {d.heading && <div class="menu-item full-width">
                                        <span class="item-name">{d.heading.left}</span>
                                        <span class="item-price">{d.heading.middle}</span>
                                        <span class="arabic-name">{d.heading.right}</span>
                                    </div>}
                                    {d.items.map(item => (
                                        <div class="menu-item full-width">
                                            <span class="item-name">{item.name}</span>
                                            <span class="item-price">{item.price + " AED"}</span>
                                            <span class="arabic-name">{item.arabic || ""}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Menu;