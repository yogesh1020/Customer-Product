using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectTaskApi.Models;

namespace ProjectTaskApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly ProjectTaskDbContext _context;

        public InvoicesController(ProjectTaskDbContext context)
        {
            _context = context;
        }

        // GET: api/Invoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoices()
        {
           var result = await _context.Invoice.ToListAsync();
            if(result == null)
            {
                return null;
            }
            else
            {
                return result;
            }
        }

        // GET: api/Invoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetInvoices(Invoice invoice)
        {
            var invoices = await _context.Invoice.LastOrDefaultAsync(e=>e.Total == invoice.Total);

            if (invoices == null)
            {
                return NotFound();
            }

            return invoices;
        }

        // PUT: api/Invoices/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoices(int id, Invoice invoices)
        {
            if (id != invoices.InvoiceId)
            {
                return BadRequest();
            }

            _context.Entry(invoices).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoicesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Invoices
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Invoice>> PostInvoices(Invoice invoices)
        {
            _context.Invoice.Add(invoices);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoices", new { id = invoices.InvoiceId }, invoices);
        }

        // DELETE: api/Invoices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Invoice>> DeleteInvoices(int id)
        {
            var invoices = await _context.Invoice.FindAsync(id);
            if (invoices == null)
            {
                return NotFound();
            }

            _context.Invoice.Remove(invoices);
            await _context.SaveChangesAsync();

            return invoices;
        }

        private bool InvoicesExists(int id)
        {
            return _context.Invoice.Any(e => e.InvoiceId == id);
        }
    }
}
