using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Mission13API.Data
{
    public partial class MovieDBContext : DbContext
    {

        public MovieDBContext(DbContextOptions<MovieDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Movie> Movies { get; set; } = null!;

    }
}
