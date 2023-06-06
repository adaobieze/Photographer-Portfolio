import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('editorial');
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handlePhotoClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleCloseLightbox = () => {
        setIsOpen(false);
    };

    const photos = [
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1611702817565-8df5ccc75287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRpdG9yaWFsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['editorial', 'fashion', 'all'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1620281487148-401d1fa8f907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWRpdG9yaWFsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1620281940848-f926397e4728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWRpdG9yaWFsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1627824204000-bd1065c4aa01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWRpdG9yaWFsJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1633667115037-b4b57c4ccbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVkaXRvcmlhbCUyMHBob3Rvc2hvb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1610209826010-75459b7f3e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWRpdG9yaWFsJTIwcGhvdG9zaG9vdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'editorial',
        image: 'https://images.unsplash.com/photo-1667190440352-2fc0c0e227ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVkaXRvcmlhbCUyMHBob3Rvc2hvb3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1631120120387-1bb08b134913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1680371371611-9168e2d7bfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1641839272138-5b4eb047e0c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1641839186708-9b2e404caaa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1595389295128-016699e74935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1682942280620-ac6a0961f5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1464666495445-5a33228a808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1646871840872-cecdc7c6c951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'fashion',
        image: 'https://images.unsplash.com/photo-1641839338547-b74cb74e1cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBwaG90b3N8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://plus.unsplash.com/premium_photo-1661344206411-93c87550b7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1594470848535-cd9cdd8871ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1481980235850-66e47651e431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBwaG90b3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1600270237614-d20aef1c8b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'wedding',
            image: 'https://images.unsplash.com/photo-1605985687770-2e2e82c9b5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdlZGRpbmclMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1600750501767-dbc0de0178e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdlZGRpbmclMjBwaG90b3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBwaG90b3N8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=800&q=60',
        tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'wedding',
            image: 'https://images.unsplash.com/photo-1600038937815-57cbbba6ba7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1454430690613-c5fbdb397f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwcGhvdG9zfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwcGhvdG9zfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwcGhvdG9zfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1604156787928-a5e83b3544f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1522262590532-a991489a0253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1623722824919-cea517d678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1509005395573-2d973751f2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1558396938-71cd991bf649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'travel',
            image: 'https://images.unsplash.com/photo-1508504509543-5ca56440e013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRyYXZlbCUyMHBob3Rvc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZXN0eWxlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlmZXN0eWxlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlmZXN0eWxlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1566501248434-6d513596c485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1529170813899-823c551d2a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'lifestyle',
            image: 'https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0eXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0eXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1534143826428-81fc61582afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0eXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        {
            category: 'beauty',
            image: 'https://images.unsplash.com/photo-1525304937537-4d586f394674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0eXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60',
            tags: ['fashion', 'portrait', 'styling'],
        },
        
        // Add more photos for other categories
    ];

    const renderTabContent = () => {
        const filteredPhotos = photos.filter((photo) => photo.category === activeTab);
    
        return (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredPhotos.map((photo, index) => (
                <img
                    key={index}
                    src={photo.image}
                    alt={photo.tags.join(', ')}
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                />
            ))}
          </div>
        );
    };

    return (
        <section id='portfolio' className='p-20 pt-40 space-y-8'>
            <h2 className='font-semibold text-3xl w-full text-center uppercase'>
                Portfolio
            </h2>
            <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                
                <button
                    onClick={() => handleTabChange('editorial')}
                    className={`uppercase font-bold ${
                        activeTab === 'editorial' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''
                    }`}
                >
                    Editorial
                </button>
                <button
                    onClick={() => handleTabChange('wedding')}
                    className={`uppercase font-bold ${activeTab === 'wedding' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''}`}
                >
                    Wedding
                </button>
                <button
                    onClick={() => handleTabChange('travel')}
                    className={`uppercase font-bold ${activeTab === 'travel' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''}`}
                >
                    Travel
                </button>
                <button
                    onClick={() => handleTabChange('fashion')}
                    className={`uppercase font-bold ${activeTab === 'fashion' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''}`}
                >
                    Fashion
                </button>
                <button
                    onClick={() => handleTabChange('lifestyle')}
                    className={`uppercase font-bold ${activeTab === 'lifestyle' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''}`}
                >
                    Lifestyle
                </button>
                <button
                    onClick={() => handleTabChange('beauty')}
                    className={`uppercase font-bold ${activeTab === 'beauty' ? 'active text-primary border-b-2 border-b-primary/50 scale-105' : ''}`}
                >
                    Beauty
                </button>

            </div>
            <div>
                {renderTabContent()}
            </div>
            <div className='flex justify-end items-center'>
                <a href='/portfolio'>
                    VIEW MORE &#10230;
                </a>
            </div>

            {/* Lightbox */}
            {isOpen && (
                <Lightbox
                    mainSrc={photos[photoIndex].image}
                    nextSrc={photos[(photoIndex + 1) % photos.length].image}
                    prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].image}
                    onCloseRequest={handleCloseLightbox}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}
                />
            )}
        </section>
    );

};

export default PortfolioSection;