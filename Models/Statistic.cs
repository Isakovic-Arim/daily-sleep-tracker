using System.ComponentModel.DataAnnotations.Schema;

namespace daily_sleep_tracker.Models
{
    public class Statistic
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public DateTime BedTime { get; set; }
        public DateTime WakeUpTime { get; set; }
        public TimeSpan duration => WakeUpTime.Subtract(BedTime);
    }
}
