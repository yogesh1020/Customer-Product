using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTaskApi.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public int CardNumber { get; set; }
        public int ExMonth { get; set; }
        public int ExYear { get; set; }
        public int Cvv { get; set; }

    }
}
