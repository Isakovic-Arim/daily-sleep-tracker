using daily_sleep_tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace daily_sleep_tracker.Data
{
    public class daily_sleep_trackerContext : DbContext
    {
        public daily_sleep_trackerContext(DbContextOptions<daily_sleep_trackerContext> options) : base(options)
        {
            
        }

        public DbSet<Statistic> Stat { get; set; }
    }
}
