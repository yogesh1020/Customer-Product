﻿using System;
using System.Collections.Generic;

namespace ProjectTaskApi.Models
{
    public partial class Cart
    {
        public int ProductCode { get; set; }
        public string ProductName { get; set; }
        public string Brand { get; set; }
        public string Price { get; set; }
    }
}
