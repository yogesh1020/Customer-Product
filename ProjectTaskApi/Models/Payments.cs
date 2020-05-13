using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTaskApi.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public string CardNumber { get; set; }
        public string ExMonth { get; set; }
        public string ExYear { get; set; }
        public string Cvv { get; set; }

    }
}
