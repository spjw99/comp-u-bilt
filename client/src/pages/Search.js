import React, {Component} from 'react';
import SearchForm from '../components/SearchForm';
import Modal from '../components/Modal';
import {Redirect} from 'react-router-dom';
import API from '../utils/API';

class Search extends Component {
  
  state = {
    show: false,
    modal: [],
    searchTerm: "",
    computers: [],
    userOrders: [],
    addedToCart: false
  }
  componentDidMount() {
    //this.createComputer();
    //this.createPart();
    this.getComputers();
  }
  
  createComputer = () => {
    const newcomputer = [
      {
        title: "SCOUT",
        price: "737.95",
        cpu: "4",
        cpu_desc: "Intel Core i5-8400",
        ram: "13",
        ram_desc: "Ballistix Sport LT 8GB",
        hdd: "24",
        hdd_desc: "WD Blue 3D NAND 250GB",
        gpu: "18",
        gpu_desc: "MSI GeForce RTX 2060",
        case: "27",
        case_desc: "NZXT H500",
        tag: "feature",
        link: "",
        image: "image/pc-1.png"
      },
      {
        title: "PRIVATE",
        price: "1038.95",
        cpu: "3",
        cpu_desc: "Intel Core i5-8600K",
        ram: "13",
        ram_desc: "Ballistix Sport LT 8GB",
        hdd: "21",
        hdd_desc: "SAMSUNG 860 EVO Series 2.5\" 500GB",
        gpu: "20",
        gpu_desc: "PowerColor Radeon RX VEGA 64",
        case: "30",
        case_desc: "LIAN LI PC-O11",
        tag: "feature",
        link: "",
        image: "image/pc-2.png"
      },
      {
        title: "COLONEL",
        price: "1339.95",
        cpu: "8",
        cpu_desc: "AMD RYZEN 7 2700",
        ram: "14",
        ram_desc: "G.SKILL TridentZ RGB Series 16GB",
        hdd: "25",
        hdd_desc: "WD Black NVMe M.2 2280 500GB",
        gpu: "19",
        gpu_desc: "ASUS ROG GeForce RTX 2070",
        case: "26",
        case_desc: "Cooler Master MasterCase H500M",
        tag: "feature",
        link: "",
        image: "image/pc-3.png"
      },
      {
        title: "CAPTAIN",
        price: "1645.95",
        cpu: "5",
        cpu_desc: "Intel Core i7-9700K",
        ram: "14",
        ram_desc: "G.SKILL TridentZ RGB Series 16GB",
        hdd: "22",
        hdd_desc: "WD Black NVMe M.2 2280 1TB",
        gpu: "17",
        gpu_desc: "GIGABYTE GeForce RTX 2080",
        case: "30",
        case_desc: "LIAN LI PC-O11",
        tag: "feature",
        link: "",
        image: "image/pc-4.png"
      },
      {
        title: "COMMANDER",
        price: "2496.95",
        cpu: "10",
        cpu_desc: "AMD 1st Gen RYZEN Threadripper 1950X",
        ram: "15",
        ram_desc: "G.SKILL TridentZ RGB Series 32GB",
        hdd: "22",
        hdd_desc: "WD Black NVMe M.2 2280 1TB",
        gpu: "16",
        gpu_desc: "EVGA GeForce RTX 2080 Ti",
        case: "26",
        case_desc: "Cooler Master MasterCase H500M",
        tag: "feature",
        link: "",
        image: "image/pc-5.png"
      }
    ];
       
    API.createComputer(newcomputer)
      .then(({data}) => console.log(data))
       .catch(err => console.log(err));
  }
  createPart = () => {
    const newpart = [
      {
        idx: "1",
        title: "Intel Core i9-9900K",
        description: "Intel Core i9-9900K Coffee Lake 8-Core, 16-Thread, 3.6 GHz (5.0 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I99900K Desktop Processor Intel UHD Graphics 630",
        price: "529.99",
        category: "1",
        tags: "Intel Core i9, intel, i9, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819117957&Description=Intel%20Core%20i9-9900K&cm_re=Intel_Core_i9-9900K-_-19-117-957-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-117-957-V01.jpg"
      },
      {
        idx: "2",
        title: "Intel Core i7-8700K",
        description: "Intel Core i7-8700K Coffee Lake 6-Core 3.7 GHz (4.7 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I78700K Desktop Processor Intel UHD Graphics 630",
        price: "369.99",
        category: "1",
        tags: "Intel Core i7, intel, i7, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819117827&Description=Intel%20Core%20i7-8700K&cm_re=Intel_Core_i7-8700K-_-19-117-827-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-117-827-Z01.jpg"
      },
      {
        idx: "3",
        title: "Intel Core i5-8600K",
        description: "Intel Core i5-8600K Coffee Lake 6-Core 3.6 GHz (4.3 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I58600K Desktop Processor Intel UHD Graphics 630",
        price: "264.99",
        category: "1",
        tags: "Intel Core i5, intel, i5, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819117825&Description=Intel%20Core%20i5-8600K&cm_re=Intel_Core_i5-8600K-_-19-117-825-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-117-825-Z01.jpg"
      },
      {
        idx: "4",
        title: "Intel Core i5-8400",
        description: "Intel Core i5-8400 Coffee Lake 6-Core 2.8 GHz (4.0 GHz Turbo) LGA 1151 (300 Series) 65W BX80684I58400 Desktop Processor Intel UHD Graphics 630",
        price: "199.99",
        category: "1",
        tags: "Intel Core i5, intel, i5, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=19-117-824&Tpk=19-117-824&nm_mc=KNC-GoogleKWLess&cm_mmc=KNC-GoogleKWLess-_-Intel-CPUs-_-intel-i5-8400-_-SKAG&gclid=CjwKCAiAsoviBRAoEiwATm8OYGXCTsGiE8u7l_birnDu-DnXojZmWSjmU0beXW3z-W_Hc6sDyR4V1RoCwEQQAvD_BwE&gclsrc=aw.ds",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-117-824-Z01.jpg"
      },
      {
        idx: "5",
        title: "Intel Core i7-9700K",
        description: "Intel Core i7-9700K Coffee Lake 8-Core 3.6 GHz (4.9 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I79700K Desktop Processor Intel UHD Graphics 630",
        price: "418.99",
        category: "1",
        tags: "Intel Core i7, intel, i7, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=9SIA2W08AJ3432&Description=Intel%20Core%20i7-9700K&cm_re=Intel_Core_i7-9700K-_-19-117-958-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-117-958-V03.jpg"
      },
      {
        idx: "6",
        title: "AMD RYZEN 3 2200G",
        description: "AMD RYZEN 3 2200G Quad-Core 3.5 GHz (3.7 GHz Turbo) Socket AM4 65W YD2200C5FBBOX Desktop Processor",
        price: "94.99",
        category: "1",
        tags: "AMD RYZEN 3, amd, ryzen 3, 3, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819113481&Description=AMD%20RYZEN%203%202200G&cm_re=AMD_RYZEN_3_2200G-_-19-113-481-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-481-V01.jpg"
      },
      {
        idx: "7",
        title: "AMD RYZEN 5 1500X",
        description: "AMD RYZEN 5 1500X 4-Core 3.5 GHz (3.7 GHz Turbo) Socket AM4 65W YD150XBBAEBOX Desktop Processor",
        price: "144.99",
        category: "1",
        tags: "AMD RYZEN 5, amd, ryzen 5, 5, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819113436&Description=AMD%20RYZEN%205%201500X&cm_re=AMD_RYZEN_5_1500X-_-19-113-436-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-436-Z01.jpg"
      },
      {
        idx: "8",
        title: "AMD RYZEN 5 2600",
        description: "AMD RYZEN 5 2600 6-Core 3.4 GHz (3.9 GHz Max Boost) Socket AM4 65W YD2600BBAFBOX Desktop Processor",
        price: "164.99",
        category: "1",
        tags: "AMD RYZEN 5, amd, ryzen 5, 5, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819113496&Description=AMD%20RYZEN%205%202600&cm_re=AMD_RYZEN_5_2600-_-19-113-496-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-496-V01.jpg"
      },
      {
        idx: "9",
        title: "AMD RYZEN 7 2700",
        description: "AMD RYZEN 7 2700 8-Core 3.2 GHz (4.1 GHz Max Boost) Socket AM4 65W YD2700BBAFBOX Desktop Processor",
        price: "259.99",
        category: "1",
        tags: "AMD RYZEN 7, amd, ryzen7, 7, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819113498&Description=AMD%20RYZEN%207%202700&cm_re=AMD_RYZEN_7_2700-_-19-113-498-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-498-V01.jpg"
      },
      {
        idx: "10",
        title: "AMD 1st Gen RYZEN Threadripper 1950X",
        description: "AMD 1st Gen RYZEN Threadripper 1950X 16-Core / 32 Threads 3.4 GHz Socket sTR4 180W YD195XA8AEWOF Desktop Processor",
        price: "589.99",
        category: "1",
        tags: "AMD RYZEN Threadripper, amd, RYZEN Threadripper, Threadripper, cpu",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16819113447&Description=AMD%201st%20Gen%20RYZEN%20Threadripper%201950X&cm_re=AMD_1st_Gen_RYZEN_Threadripper_1950X-_-19-113-447-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-447-V01.jpg"
      },
      {
        idx: "11",
        title: "CORSAIR Vengeance RGB Pro 16GB",
        description: "CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin DDR4 DRAM DDR4 3000 (PC4 24000) Desktop Memory Model CMW16GX4M2D3000C16",
        price: "119.99",
        category: "2",
        tags: "16GB Memory, 16gb, ram, corsair, 288, ddr4, dram, pc4 24000",
        link: "https://www.newegg.com/Product/Product.aspx?Item=9SIACVB7YB1095&Description=CMW16GX4M2D3000C16&cm_re=CMW16GX4M2D3000C16-_-20-236-426-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-236-426-V01.jpg"
      },
      {
        idx: "12",
        title: "CORSAIR Vengeance LPX 32GB",
        description: "CORSAIR Vengeance LPX 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 2400 (PC4 19200) Desktop Memory Model CMK32GX4M2A2400C16",
        price: "189.99",
        category: "2",
        tags: "32GB Memory, 32gb, ram, corsair, 288, ddr4, sdram, pc4 19200",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820236023&Description=CORSAIR%20Vengeance%20LPX%2032GB&cm_re=CORSAIR_Vengeance_LPX_32GB-_-20-236-023-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-236-023-01.jpg"
      },
      {
        idx: "13",
        title: "Ballistix Sport LT 8GB",
        description: "Ballistix Sport LT 8GB (2 x 4GB) 288-Pin DDR4 SDRAM DDR4 2400 (PC4 19200) Desktop Memory Model BLS2K4G4D240FSC",
        price: "60.99",
        category: "2",
        tags: "8gb, ram, ballistix, 288, ddr4, sdram, pc4 19200",
        link: "8GB Memory, https://www.newegg.com/Product/Product.aspx?Item=N82E16820156082&Description=Ballistix%20Sport%20LT%208GB&cm_re=Ballistix_Sport_LT_8GB-_-20-156-082-_-Product",
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/20-156-082-V01.jpg"
      },
      {
        idx: "14",
        title: "G.SKILL TridentZ RGB Series 16GB",
        description: "G.SKILL TridentZ RGB Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Desktop Memory Model F4-3200C16D-16GTZR",
        price: "139.99",
        category: "2",
        tags: "16GB Memory, 16gb, ram, g.skill, 288, ddr4, sdram, pc4 25600",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820232476&Description=G.SKILL%20TridentZ%20RGB%20Series%2016GB&cm_re=G.SKILL_TridentZ_RGB_Series_16GB-_-20-232-476-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-232-476-S01.jpg"
      },
      {
        idx: "15",
        title: "G.SKILL TridentZ RGB Series 32GB",
        description: "G.SKILL TridentZ RGB Series 32GB (4 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Desktop Memory Model F4-3200C16Q-32GTZR",
        price: "299.99",
        category: "2",
        tags: "32GB Memory, 32gb, ram, g.skill, 288, ddr4, sdram, pc4 25600",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820232748&Description=G.SKILL%20TridentZ%20RGB%20Series%2032GB&cm_re=G.SKILL_TridentZ_RGB_Series_32GB-_-20-232-748-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-232-748-01.jpg"
      },
      {
        idx: "16",
        title: "EVGA GeForce RTX 2080 Ti",
        description: "EVGA GeForce RTX 2080 Ti DirectX 12 11G-P4-2281-KR 11GB 352-Bit GDDR6 PCI Express 3.0 HDCP Ready SLI Support BLACK EDITION GAMING Video Card, Dual HDB Fans & RGB LED",
        price: "1189.99",
        category: "3",
        tags: "gpu, evga, geforce, 2080",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16814487418&Description=EVGA%20GeForce%20RTX%202080%20Ti&cm_re=EVGA_GeForce_RTX_2080_Ti-_-14-487-418-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-487-418-V08.jpg"
      },
      {
        idx: "17",
        title: "GIGABYTE GeForce RTX 2080",
        description: "GIGABYTE GeForce RTX 2080 GAMING OC 8G Video Card, GV-N2080GAMING OC-8GC",
        price: "729.99",
        category: "3",
        tags: "gpu, gigabyte, geforce, 2080",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16814932081&Description=GIGABYTE%20GeForce%20RTX%202080&cm_re=GIGABYTE_GeForce_RTX_2080-_-14-932-081-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-932-081-V01.jpg"
      },
      {
        idx: "18",
        title: "MSI GeForce RTX 2060",
        description: "MSI GeForce RTX 2060 DirectX 12 RTX 2060 VENTUS 6G OC 6GB 192-Bit GDDR6 PCI Express 3.0 x16 HDCP Ready Video Card",
        price: "349.99",
        category: "3",
        tags: "gpu, msi, geforce, 2050",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16814137380&Description=MSI%20GeForce%20RTX%202060&cm_re=MSI_GeForce_RTX_2060-_-14-137-380-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-137-380-V07.jpg"
      },
      {
        idx: "19",
        title: "ASUS ROG GeForce RTX 2070",
        description: "ASUS ROG GeForce RTX 2070 DirectX 12 ROG-STRIX-RTX2070-O8G-GAMING 8GB 256-Bit GDDR6 PCI Express 3.0 HDCP Ready Video Card",
        price: "629.99",
        category: "3",
        tags: "gpu, asus, geforce, 2070",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16814126266&Description=ASUS%20ROG%20GeForce%20RTX%202070&cm_re=ASUS_ROG_GeForce_RTX_2070-_-14-126-266-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-126-266-V06.jpg"
      },
      {
        idx: "20",
        title: "PowerColor Radeon RX VEGA 64",
        description: "PowerColor Radeon RX VEGA 64 DirectX 12 AXRX VEGA 64 8GBHBM2-3DHW 8GB 2048-Bit HBM2 PCI Express 3.0 CrossFireX Support ATX Video Card Liquid Cooling",
        price: "499.99",
        category: "3",
        tags: "gpu, powercolor, radeon",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16814131726&Description=PowerColor%20Radeon%20RX%20VEGA%2064&cm_re=PowerColor_Radeon_RX_VEGA_64-_-14-131-726-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/14-131-726-V01.jpg"
      },
      {
        idx: "21",
        title: "SAMSUNG 860 EVO Series 2.5\" 500GB",
        description: "SAMSUNG 860 EVO Series 2.5\" 500GB SATA III V-NAND 3-bit MLC Internal Solid State Drive (SSD) MZ-76E500B/AM",
        price: "82.99",
        category: "4",
        tags: "500GB SSD, hdd, ssd, samsung, 500gb",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820147674&Description=SAMSUNG%20860%20EVO%20Series%202.5%22%20500GB&cm_re=SAMSUNG_860_EVO_Series_2.5%22_500GB-_-20-147-674-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-147-674-V01.jpg"
      },
      {
        idx: "22",
        title: "WD Black NVMe M.2 2280 1TB",
        description: "WD Black NVMe M.2 2280 1TB PCI-Express 3.0 x4 3D NAND Internal Solid State Drive (SSD) WDS100T2X0C",
        price: "226.99",
        category: "4",
        tags: "1TB SSD, hdd, ssd, wd, 1tb",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820250099&Description=wD%20Black%20NVMe%20M.2%202280%201TB&cm_re=wD_Black_NVMe_M.2_2280_1TB-_-20-250-099-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-250-099-V05.jpg"
      },
      {
        idx: "23",
        title: "Crucial P1 1TB",
        description: "Crucial P1 1TB 3D NAND NVMe PCIe M.2 SSD - CT1000P1SSD8",
        price: "144.99",
        category: "4",
        tags: "1TB SSD, hdd, ssd, crucial, 1tb",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820156199&Description=Crucial%20P1%201TB&cm_re=Crucial_P1_1TB-_-20-156-199-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-156-199-V01.jpg"
      },
      {
        idx: "24",
        title: "WD Blue 3D NAND 250GB",
        description: "WD Blue 3D NAND 250GB PC SSD - SATA III 6 Gb/s 2.5\"/7mm Solid State Drive - WDS250G2B0A",
        price: "49.99",
        category: "4",
        tags: "250GB SSD, hdd, ssd, wd, 250gb",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820250086&Description=WD%20Blue%203D%20NAND%20250GB&cm_re=WD_Blue_3D_NAND_250GB-_-20-250-086-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-250-086-V06.jpg"
      },
      {
        idx: "25",
        title: "WD Black NVMe M.2 2280 500GB",
        description: "WD Black NVMe M.2 2280 500GB PCI-Express 3.0 x4 3D NAND Internal Solid State Drive (SSD) ",
        price: "119.99",
        category: "4",
        tags: "500GB SSD, hdd, ssd, wd, 500gb",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16820250098&Description=WD%20Black%20NVMe%20M.2%202280%20500GB&cm_re=WD_Black_NVMe_M.2_2280_500GB-_-20-250-098-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/20-250-098-V05.jpg"
      },
      {
        idx: "26",
        title: "Cooler Master MasterCase H500M",
        description: "Cooler Master MasterCase H500M ATX Mid-Tower, four tempered glass panels, two 200mm ARGB fans with Controller and three Cable Management Covers Case",
        price: "189.99",
        category: "5",
        tags: "case, glass, mid-tower",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16811119349&Description=Cooler%20Master%20MasterCase%20H500M&cm_re=Cooler_Master_MasterCase_H500M-_-11-119-349-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-119-349-V13.jpg"
      },
      {
        idx: "27",
        title: "NZXT H500",
        description: "NZXT H500 CA-H500B-BR Matte Black/Red SECC Steel and Tempered Glass ATX Mid Tower Computer Case",
        price: "76.99",
        category: "5",
        tags: "case, black/red, glass, mid-tower",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16811146290&Description=NZXT%20H500&cm_re=NZXT_H500-_-11-146-290-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-290-Z01.jpg"
      },
      {
        idx: "28",
        title: "COOLER MASTER MasterBox",
        description: "COOLER MASTER MasterBox MB511 RGB MCB-B511D-KGNN-RGB Black Steel / Plastic / Tempered Glass ATX Mid Tower Computer Case",
        price: "69.99",
        category: "5",
        tags: "case, glass, black, mid-tower",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16811119356&Description=COOLER%20MASTER%20MasterBox&cm_re=COOLER_MASTER_MasterBox-_-11-119-356-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-119-356-V01.jpg"
      },
      {
        idx: "29",
        title: "NZXT H700i",
        description: "NZXT H700i Mid Tower Chassis with 3x120mm, 1x140mm and LED strips, Matte Black/Black with Smart Device, Cable Management System and Tempered Glass",
        price: "179.99",
        category: "5",
        tags: "case, glass, matte black, led, mid-tower",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16811146272&Description=NZXT%20H700i&cm_re=NZXT_H700i-_-11-146-272-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-272-V01.jpg"
      },
      {
        idx: "30",
        title: "LIAN LI PC-O11",
        description: "LIAN LI PC-O11 Dynamic White Tempered glass on the front, and left sides. Chassis body SECC ATX Mid Tower Gaming Computer Case - PC-O11DW",
        price: "129.99",
        category: "5",
        tags: "case, glass, gaming, mid-tower",
        link: "https://www.newegg.com/Product/Product.aspx?Item=N82E16811112582&Description=LIAN%20LI%20PC-O11&cm_re=LIAN_LI_PC-O11-_-11-112-582-_-Product",
        image: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/A00V_1316868107147714239f2Q7Ix4aY.jpg"
      }
    ];
    API.createPart(newpart)
      .then(({data}) => console.log(data))
       .catch(err => console.log(err));
  }
  getComputers = () => {
    //COMPUTERS FROM PRE-BUILT
    API.getComputers()
      .then(({data}) => {
        this.setState({computers: data})
      })
      .catch(err => console.log(err));
    //COMPUTERS FROM USER PURCHASE
    API.getUserOrders()
      .then(({data}) => {
        
        this.setState({userOrders: data})
      })
      .catch(err => console.log(err));
  }
  
  // method to handle on change
  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  // handle form submit
  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }

    API
      .getComputersByPrice(this.state.searchTerm)
      .then(({data}) => this.setState({computers: data}))
      .catch(err => console.log(err));
  }

  addToCart = computerId => {
    const selectedComputer = this.state.computers.find(({_id}) => _id === computerId);
    const readyForOrder = {
      userId: "0",
      orderId: "",
      custName: "",
      custShipAddr: "",
      custPhone: "",
      custCard: "",
      computer: [selectedComputer]
    };
    //console.log(readyForOrder);
    API
      .addToCart(readyForOrder)
      .then(({data}) => {
        console.log(data);
        this.setState({
          addedToCart: true
        })
      })
      .catch(err => console.log(err));
  }
  moreInfo = (partType, partId) => {
    if(partType === "cpu"){
      API
        .getCpusByTags(partId)
        .then(({data}) => {
          console.log(data);
          this.setState({modal: data});
          this.showModal();
        })
        .catch(err => console.log(err));
    }else if(partType === "ram"){
      API
      .getRamsByTags(partId)
      .then(({data}) => {
        this.setState({modal: data});
        this.showModal();
      })
      .catch(err => console.log(err));
    }else if(partType === "hdd"){
      API
      .getHddsByTags(partId)
      .then(({data}) => {
        this.setState({modal: data});
        this.showModal();
      })
      .catch(err => console.log(err));
    }
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    if (this.state.addedToCart) {
      return <Redirect to="/order" />
    }

    const cursorStyle = {cursor : 'pointer'};
    const cpuLogo = {width : '50px', position: 'relative', top: '-12px'};
    const bodyWidth = {'width': '80%'};
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Welcome to COMP-U-BILT!</h1>
        </div>
        <div className="container-fluid" style={bodyWidth}>
          <div className="row">
            <div className="col-12 col-md-3">
              <h3>What is your budget?</h3>
              <SearchForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.searchTerm}
              />
            </div>
            {/* Right hand column */}
            <div className="col-12 col-md-9">
              <h2>FEATURES</h2>
              <hr></hr>
              <div className="row align-items-stretch">
                {!this.state.computers.length ? 
                  (<h2>No computer is available for now</h2>) 
                  : 
                  this.state.computers.map(computer => {
                    return (
                      <div className="col-12 col-md-4 col-sm-6" key={computer._id}>
                        <div className="card">
                          <h5 className="card-header">{computer.title}</h5>
                          <img src={computer.image} alt={computer.title} className="card-img"/>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="">
                                <h4 className="card-subtitle">${computer.price}</h4>
                              </div>
                              <div className="">
                                {
                                  computer.cpu_desc.includes("i5-8") ? 
                                  (<img src="image/i5_8.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("i7-8") ? 
                                  (<img src="image/i7_8.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("i7-9") ? 
                                  (<img src="image/i7_9.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("i9-9") ? 
                                  (<img src="image/i9_9.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("RYZEN 3") ? 
                                  (<img src="image/a3.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("RYZEN 5") ? 
                                  (<img src="image/a5.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("RYZEN 7") ? 
                                  (<img src="image/a7.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  computer.cpu_desc.includes("Threadripper") ? 
                                  (<img src="image/at.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  null
                                }
                              </div>
                            </div>
                            <div className="float-none"></div>
                            <div className="btn-group d-flex flex-column mt-3 " role="group">
                              <p style={cursorStyle} onClick={() => this.moreInfo("cpu", computer.cpu)}><i className="fas fa-microchip"></i> {computer.cpu_desc}</p>
                              <p style={cursorStyle} onClick={() => this.moreInfo("ram", computer.ram)}><i className="fas fa-memory"></i> {computer.ram_desc}</p>
                              <p style={cursorStyle} onClick={() => this.moreInfo("hdd", computer.hdd)}><i className="fas fa-hdd"></i> {computer.hdd_desc}</p>
                              <button type="button" className="btn btn-warning m-2" onClick={() => this.addToCart(computer._id)}>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>


              <h2 className="mt-5">Recently Bought</h2>
              <hr></hr>
              <div className="row align-items-stretch">
                {!this.state.userOrders.length ? 
                  (<h2></h2>) 
                  : 
                  this.state.userOrders.map(userOrder => {
                    return (
                      <div className="col-12 col-md-4 col-sm-6" key={userOrder._id}>
                        <div className="card">
                          <h5 className="card-header">{userOrder.computer[0].title} <i className="mark float-right">by {userOrder.custName}</i></h5>
                          <img src={userOrder.computer[0].image} alt={userOrder.computer[0].title} className="card-img"/>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="">
                                <h4 className="card-subtitle">${userOrder.computer[0].price}</h4>
                              </div>
                              <div className="">
                                {
                                  userOrder.computer[0].cpu_desc.includes("i5-8") ? 
                                  (<img src="image/i5_8.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("i7-8") ? 
                                  (<img src="image/i7_8.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("i7-9") ? 
                                  (<img src="image/i7_9.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("i9-9") ? 
                                  (<img src="image/i9_9.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("RYZEN 3") ? 
                                  (<img src="image/a3.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("RYZEN 5") ? 
                                  (<img src="image/a5.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("RYZEN 7") ? 
                                  (<img src="image/a7.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  userOrder.computer[0].cpu_desc.includes("Threadripper") ? 
                                  (<img src="image/at.jpg" alt="" style={cpuLogo}/>)
                                  :
                                  null
                                }
                              </div>
                            </div>
                            <div className="float-none"></div>
                            <div className="btn-group d-flex flex-column mt-3 " role="group">
                              <p style={cursorStyle} onClick={() => this.moreInfo("cpu", userOrder.computer[0].cpu)}><i className="fas fa-microchip"></i> {userOrder.computer[0].cpu_desc}</p>
                              <p style={cursorStyle} onClick={() => this.moreInfo("ram", userOrder.computer[0].ram)}><i className="fas fa-memory"></i> {userOrder.computer[0].ram_desc}</p>
                              <p style={cursorStyle} onClick={() => this.moreInfo("hdd", userOrder.computer[0].hdd)}><i className="fas fa-hdd"></i> {userOrder.computer[0].hdd_desc}</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </div>
        {/* <Modal
          value={this.state.modal}
        /> */}
        <Modal 
          show = {this.state.show}
          handleClose = {this.hideModal}
          value = {this.state.modal}
          />
        
      </div>
    )
  }
}

export default Search;