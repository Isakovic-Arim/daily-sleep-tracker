using daily_sleep_tracker.Data;
using daily_sleep_tracker.Models;
using Microsoft.AspNetCore.Mvc;

namespace daily_sleep_tracker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private readonly daily_sleep_trackerContext _context;

        public StatisticsController(daily_sleep_trackerContext context)
        {
            _context = context;
        }

        // GET: api/<StatisticsController>
        [HttpGet]
        public IEnumerable<Statistic> Get()
        {
            return _context.Stat.ToArray();
        }

        // GET api/<StatisticsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<StatisticsController>
        [HttpPost]
        public IActionResult Post([FromBody] Statistic value)
        {
            _context.Add(value);
            _context.SaveChanges();
            return Ok(value);
        }

        // PUT api/<StatisticsController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Statistic value)
        {
            Statistic stat = new Statistic() {Id = id, Date = value.Date, BedTime = value.BedTime, WakeUpTime = value.WakeUpTime};
            _context.Update(stat);
            _context.SaveChanges();
            return Ok(value);
        }

        // DELETE api/<StatisticsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Statistic stat = new Statistic() {Id = id};
            _context.Attach(stat);
            _context.Remove(stat);
            _context.SaveChanges();
            return Ok(id);
        }
    }
}
