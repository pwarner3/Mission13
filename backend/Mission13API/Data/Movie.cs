using System;
using System.Collections.Generic;

namespace Mission13API.Data
{
    public partial class Movie
    {
        public byte[]? MovieId { get; set; }
        public byte[]? Category { get; set; }
        public byte[]? Title { get; set; }
        public byte[]? Year { get; set; }
        public byte[]? Director { get; set; }
        public byte[]? Rating { get; set; }
        public byte[]? Edited { get; set; }
        public byte[]? LentTo { get; set; }
        public byte[]? Notes { get; set; }
    }
}
