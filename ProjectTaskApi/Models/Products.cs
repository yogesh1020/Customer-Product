using System;
using System.Collections.Generic;

namespace ProjectTaskApi.Models
{
    public partial class Products
    {
        public int ProductCode { get; set; }
        public string ProductName { get; set; }
        public string Brand { get; set; }
        public decimal Price { get; set; }
        public string Status { get; set; }
    }
}
